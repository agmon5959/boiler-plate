// BackEnd Starting Point
// mongodb+srv://dongdong:<password>@boilerplate.cpf22.mongodb.net/<dbname>?retryWrites=true&w=majority
const express = require('express') // express module을 가져옴
const app = express() // express의 function을 이용해서 새로운 express app create
const port = 5000 // 포트번호는 아무번호나 상관없음 3000,4000 ... 

const mongoose = require('mongoose') // mongoose ( MongoDB를 편하게 사용할 수 있게 해주는 툴 ) 연결

mongoose.connect('mongodb+srv://dongdong:5959@boilerplate.cpf22.mongodb.net/<dbname>?retryWrites=true&w=majority', { // 몽구스와 연결
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false // Error 방지
    }).then(() => console.log('MongoDB Connected ...')) // 연결이 잘 됐을때 콘솔로그 찍어주기
    .catch(err => console.log(err)) // 연결이 안됐을 때 에러 찍어주기


app.get('/', (req, res) => res.send('Hello World 안녕하세요 ^-^')) // 루트디렉토리(/)에 오면 Hello World를 출력되게 해주는 것.
app.listen(port, () => console.log(`Example app listening on port ${port}!`))