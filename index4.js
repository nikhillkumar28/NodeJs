import express from 'express';
import { CLIENT_RENEG_LIMIT } from 'node:tls';
const app = express();
app.listen(8080,()=>{
    console.log("Server Started");
});

// app.get("/:id",(req,res)=>{
//     console.log(req.url);
//     res.send(req.params.id);
// });

app.get("/:id/:email",(req,res)=>{
    console.log(req.url);
    res.send(req.params.id+req.params.email);
});

app.get("/home",(req,res)=>{
    res.send("Hello World !!");
});
