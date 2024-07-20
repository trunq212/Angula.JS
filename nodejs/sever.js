// server.mjs
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from '../nodejs/router/authRouter.js';
import productRouter from '../nodejs/router/productRouter.js';
import homeRouter from '../nodejs/router/homeRouter.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/angular', {
}).then(() => {
  console.log('Kết nối thành công với mongodb');
}).catch((error) => {
  console.error('Lỗi kết nối với mongodb:', error);
});
app.use('/auth', authRoutes);
app.use('/students', productRouter);
app.use('/home', homeRouter);


app.listen(PORT, (err) => {
  if (err) {
    console.error(`Lỗi SERVER ${PORT}:`, err);
  } else {
    console.log(`Server đang chạy trên cổng ${PORT}`);
  }
});
