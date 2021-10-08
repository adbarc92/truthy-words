import path from 'path';
import express from 'express';
import morgan from 'morgan';
import axios, { Method } from 'axios';

import { dictApiKey } from '../config';

const baseUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json`;
const PORT = process.env.PORT || 3000;

const app = express();

app.use('*.js' || '*.jsx', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.json());
app.use(morgan('common'));
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.all('/api/*', (req, res) => {
  const { method, url, body } = req;
  axios(`${baseUrl}/${url.slice(4)}?key=${dictApiKey}`, {
    method: method as Method,
    headers: {
      'Content-Type': 'application/json'
    },
    data: body
  })
    .then((apiRes) => {
      res.status(apiRes.status).send(apiRes.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
