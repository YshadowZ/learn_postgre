const pool = require('./database');
const R = require('ramda');
const cvss = require('./test.js');

(async function() {
  const result = await pool.query('select * from publisher');
  result.rows.forEach(async (row) => {
    const result = await pool.query(`select * from semester where publisherId = ${row.id}`);
    console.log(result.rows);
    console.log(row.id);
  })
  console.log('end');
  await pool.end();
})()