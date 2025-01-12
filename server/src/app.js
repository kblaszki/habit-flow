import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import sequelize from './config/database.js';

sequelize.sync().then(() => {
  console.log('Database synced!');
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('HabitFlow API is running!');
});

export default app;