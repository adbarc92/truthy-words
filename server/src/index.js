const path = require('path');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const { dictApiKey } = require('../config');

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
  const url = `${baseUrl}/${req.url.slice(4)}?key=${dictApiKey}`;
  console.log('url:', url);
  axios({
    method: req.method,
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: req.body
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
