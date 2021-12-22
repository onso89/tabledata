// const { readFileSync } = require('fs');
// const { resolve } = require('path');
const path = require('path');

const config = {
  user: process.env.DB_HSA_USER,
  host: process.env.DB_HSA_HOST,
  database: process.env.DB_HSA_DATABASE,
  password: process.env.DB_HSA_PASS,
  port: process.env.DB_HSA_PORT,
  // this object will be passed to the TLSSocket constructor
  ssl: {
    rejectUnauthorized: false,
    ca: path.join(__dirname, '../ca-certificate_hsa.crt'),
  },
};

module.exports = config;
