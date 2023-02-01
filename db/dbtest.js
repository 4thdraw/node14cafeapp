const express = require('express');
const dbrouter = express.Router();
const mysql = require('mysql');


dbrouter.get('/', (()=>{
  const connection = mysql.createConnection({
    host: 'nodejs-008.cafe24.com',
    user: 'node14',
    password: 'node0820!!',
    database: 'node14',
    port: '3306',
  });
  
  // 데이터베이스 연결
  connection.connect();
  var noticeQuery = "SELECT * FROM bby_interview";
  // create 쿼리문 사용
  connection.query(noticeQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });
  
  connection.query('describe books', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });
  
  // 연결 종료
  connection.end();

}))


  module.exports = dbrouter;
