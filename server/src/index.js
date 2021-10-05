const path = require('path');
const express = require('express');
const morgan = require('morgan');

const apiKey = require('../config');

const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=${apiKey}`;
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

/* TODO: ADD PROXYING ROUTE HERE */

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
