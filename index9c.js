import express from "express";
const app = express();
app.use(express.json());

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token && token.split(" ")[1] === "1234") {
        next();
    } else {
        res.send("Access Denied");
    }
};

app.use(auth);

app.get("/1234", (req, res) => {
    res.send("Welcome To The Protected Zone");
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});