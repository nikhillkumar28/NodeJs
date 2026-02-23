
import express from 'express';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});