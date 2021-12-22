// const { readFileSync } = require('fs');
// const { resolve } = require('path');
const path = require('path');

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  // this object will be passed to the TLSSocket constructor
  ssl: {
    rejectUnauthorized: false,
    ca: path.join(__dirname, '../ca-certificate.crt'),
  },
};

module.exports = config;