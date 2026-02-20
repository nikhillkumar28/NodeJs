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

app.get("/:num1/:num2",(req,res)=>{
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    res.send((req.params.num1 + req.params.num2).toString());
});

// app.get("/:var1/:num1/:var2/:num2/:var3/:num3",(req,res)=>{
//     res.send(`x ${num1},y${num2},z${num3}`);
// });
