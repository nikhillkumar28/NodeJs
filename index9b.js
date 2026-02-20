import express from "express";
const app = express();
app.use(express.json());

const logger = (req, res, next) => {
    const token = req.query.token; 
    console.log("Received token:", token);
    if (token === "1234") {
        next();
    } else {
        res.send("Invalid Token or Unauthorized Access");
    }
};

app.use(logger);

app.get("/1234", (req, res) => {
    res.send("Welcome To The Protected Route");
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});