const url = require('url');
const link = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(url, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2017&month=february'

let qData = q.query; // returns an object: { year: 2017, month: 'february' }
console.log(qData.month); // returns 'february'