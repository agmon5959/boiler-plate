// BackEnd Starting Point
const express = require('express') // express module을 가져옴
const app = express() // express의 function을 이용해서 새로운 express app create
const port = 5000 // 포트번호는 아무번호나 상관없음 3000,4000 ... 
const config = require('./config/key');
const bodyParser = require('body-parser') // application/x-www-form-urlencoded 형식으로 된 것을 분석해서 가져올 수 있게 해주는 코드
const { User } = require("./models/User"); // application/json 형식으로 된 것을 분석해서 가져올 수 있게 해주는 코드

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose'); // mongoose ( MongoDB를 편하게 사용할 수 있게 해주는 툴 ) 연결
const { mongoURI } = require('./config/dev');

mongoose.connect(config.mongoURI, { // 몽구스와 연결
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false // Error 방지
    }).then(() => console.log('MongoDB Connected ...')) // 연결이 잘 됐을때 콘솔로그 찍어주기
    .catch(err => console.log(err)) // 연결이 안됐을 때 에러 찍어주기


app.get('/', (req, res) => res.send('Hello World 안녕하세요')); // 루트디렉토리(/)에 오면 Hello World를 출력되게 해주는 것.

app.post('/register', (req, res) => {
    // 회원가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
    // User.js 유저 모델을 가져와야함.
    const user = new User(req.body);
    // 회원가입에 필요한 정보들을 넣기 위한 코드 req.body에 JSON 정보들이 들어있음. 이렇게 들어있을 수 있게 해주는것은
    // body-parser 덕분임.
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        });
        // status(200)은 성공했다는 뜻
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))