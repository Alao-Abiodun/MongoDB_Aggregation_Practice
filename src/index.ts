import express from 'express';
import  connectDB from './connection';

const app = express();

const port = 3201

app.get('/', (_, res) => {
  res.status(200).send()
})

app.listen(port, () => {
    connectDB()
    console.log(`Running on port ${port}`)
})