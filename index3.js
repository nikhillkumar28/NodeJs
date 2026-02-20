
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
app.get("/home",(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log(req.header);
    res.send("Response From Server For /home")
})
