const pool = require('../database');
const R = require('ramda');

async function fetchcvs(ctx) {
  console.log(ctx.query)
  const result = await pool.query('select * from publisher');
  const cvss = [];
  let cvs = {};
  console.log(result.rows);
  for (let index in result.rows) {
    const semesters = await pool.query(`select name from semester where publisherId = ${result.rows[index].id}`);
    cvs[result.rows[index].name] = R.map(row => R.values(row)[0], semesters.rows);
    cvss.push(cvs);
    cvs = {};
  }
  ctx.body = cvss;
}

module.exports = {
  fetchcvs
};
