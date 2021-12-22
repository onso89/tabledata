const { Pool } = require('pg');
// const config = require('./tabledata.config');
const config = require('./hsadash.config');

const pool = new Pool(config);

// needs further check with the pg module best practices
// module.exports = pool;
module.exports = {
  async query(text, params) {
    const res = await pool.query(text, params);
    return res;
  },
};