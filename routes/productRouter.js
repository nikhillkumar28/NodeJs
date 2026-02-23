import express from 'express';
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
    res.send("Get from product");
});

productRouter.post("/", (req, res) => {
    res.send("Post from product");
});

export default productRouter;