const express = require('express');
const mysql = require('mysql'); 
const bodyParser = require('body-parser'); // node 16버전에서는 express로 편입 호출필요없음
const router = express.Router();
const dbconfig = require('./dbconfig');


router.use(bodyParser.json());


const connectionSetting= dbconfig;
//깃허브에 dbconfig와 node_modules는 빼주기

const conn=mysql.createConnection(connectionSetting)


router.get('/',(req, res) => {
   // sql 관리하는 xml파일 접근하기 위한 추가된 정보를 일단 확인해보고 진행
  // res.send({ 
  //   "sql맵파일" :
  //   req.body.mapper,
  //   "sql처리":
  //   req.body.crud, 
  //   "맵아이디":
  //   req.body.mapperid
  //  })
   

  var params = req.body; //요청자료들 일단 여기저장
   console.log('req.body.body 즉 요청데이터타입 : ', typeof params ); //object
   console.log('req.body.body 요청데이터  : ', params ); //object
   //확인해보기

   var noticeQuery = "SELECT * FROM bby_interview";
      conn.query(noticeQuery, (error, results) => {
        //DB sql퀴리실행
        if(error){
          res.send(error)
        }
        res.send('쿼리실행 성공!')

      })
   

})

module.exports = router;