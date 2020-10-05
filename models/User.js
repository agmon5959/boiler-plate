// Schema는 하나하나
// Model이 Schema를 감싼다.


const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // trim은 스페이스바를 없애주는 역할을 합니다. ex ) qltkd 5959@gmail.com 일때 사이의 공백을 없앰
        unique: 1

    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        defalut: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { // 토근유효기간
        type: Number
    }

})

const User = mongoose.model('User', userSchema) // 스키마를 모델로 감싸는 코드

module.exports = { User } // 모델을 다른 파일에서도 사용하기 위하여 exports 해주기