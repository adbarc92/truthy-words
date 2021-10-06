require('dotenv').config();

module.exports = {
  dictApiKey: process.env.DICT_API_KEY || 'your-api-key',
  medApiKey: process.env.MED_API_KEY || 'your-other-api-key'
};
