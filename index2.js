
import express from 'express';
import { CLIENT_RENEG_LIMIT } from 'node:tls';
const app = express();
app.listen(8080,()=>{
    console.log("Server Started");
});
app.get("/",(req,res)=>{
    console.log(req.url);
    res.send("Response From Server For /")
})


