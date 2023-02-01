const express = require('express');
const mysql = require('mysql'); 
const bodyParser = require('body-parser'); // node 16버전에서는 express로 편입 호출필요없음
const router = express.Router();
const dbconfig = require('./dbconfig'); //db정보 외부로 빼주기 깃허브에 올리지않도록 처리하기

var mybatisMapper = require('mybatis-mapper'); // sql저장해둔  xml 접근 모듈

mybatisMapper.createMapper(['./mapper/reactSQL.xml']) // 다양한 플랫폼에서 쓸 수 있는 xml파일
var format = { language : 'sql', indent : '  '} // 노드가 쓸때 xml에 담아둔 정보가 sql언어이며, 띄어쓰기하기



router.use(bodyParser.json());



//깃허브에 dbconfig와 node_modules는 빼주기

const conn=mysql.createPool(dbconfig) 
// 서버접속 요청에 일일이 접속하면 자원낭비 / 풀장처럼 담아서 실행
// 1. MySQL 모듈을 불러온다.
// 2. DB와 연결한다
// 3. 쿼리를 실행한다
// 4. 연결을 끊는다. 요걸 매번해야만 한다...
// db접속 정보를 createPool로 실행하므로 2가지 옵션 추가
//waitForConnections :true, connectionLimit : 5
//접속 5개씩 .. 사용자가 6번째인 사람은 대기하다가 하나 끝나면 접속되도록 처리


router.get('/',(req, res) => {

   

  var params = req.body; //요청자료들 일단 여기저장
   console.log('req.body.body 즉 요청데이터타입 : ', typeof params ); //object
   console.log('req.body.body 요청데이터  : ', params ); //object
   //확인해보기

   //var noticeQuery = "SELECT * FROM bby_interview"; -> xml에 저장해둔 걸로 쓰기
   var noticeQuery = mybatisMapper.getStatement( 
                    params.mapper, //이전 라우터에서 추가한 정보
                    params.mapperid, //이전 라우터에서 추가한 정보
                    params, // 리액트가 던져준거 
                    format  // sql언어이고 들어쓰기 하기
    ); // xml에서 가져와서 쿼리문 생성

      conn.query(noticeQuery, (error, results) => {
        //DB sql퀴리실행
        if(error){
          res.send(error)
        }
        res.send('쿼리실행 성공!')

      })
   

})

module.exports = router;