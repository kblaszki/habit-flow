import {json} from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('HabitFlow API is running!');
});

export default app;