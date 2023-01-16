import express from 'express';
import  connectDB from './connection';
import { User } from './routes/user.route';

const app = express();

const port = 3201

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Welcome to MongoDB Aggregation'
  });
})

app.use('/api/v1/users', User);

app.listen(port, () => {
    connectDB()
    console.log(`Running on port ${port}`)
})