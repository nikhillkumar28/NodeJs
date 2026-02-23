import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS3Jpc2huYSIsImVtYWlsIjoia25AZ21haWwuY29tIiwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE3NzE4MzM5MTcsImV4cCI6MTc3MTgzNzUxN30.Mk_pPmC8pup1aQoR-Y2mzx7qwgaSrLcwX3rrxNQy_nI"
const SECRET = "IMI"
const user = jwt.verify(token,SECRET);
console.log(user);
// 1 1 1970 