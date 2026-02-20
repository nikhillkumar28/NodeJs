import express from "express";
const app = express();
app.use(express.json());
const jwt = Math.floor(Math.random() * 10).toString();
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token && token.split(" ")[1] === jwt) {
        next();
    } else {
        res.send("Access Denied..");
    }
};
app.post("/login",(req,res)=>{
    res.send({token : jwt});
})

app.get("/1234", auth,(req, res) => {
    res.send("Welcome To The Protected Zone");
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});