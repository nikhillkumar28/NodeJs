import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()
const Token = "token@123"
const SECRET = "IMI"
const user = jwt.verify(Token,SECRET);
console.log(user);
// 1 1 1970 
