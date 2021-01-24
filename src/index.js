import express from 'express';

import apiRouter from './router/api';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('hallo');
});

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}`),
);
