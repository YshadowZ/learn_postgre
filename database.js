const Pool = require('pg-pool');
const config = require('./dbConfig');

const pool = new Pool(config);

module.exports = pool;
