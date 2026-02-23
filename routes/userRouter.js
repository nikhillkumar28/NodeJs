import express from 'express';
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("Get request from user Router");
});

userRouter.post("/", (req, res) => {
    res.send("Post request from user Router");
});

export default userRouter;