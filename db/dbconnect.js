const express = require('express');
const sql = require('sql'); //sql접속모듈
const bodyParser = require('body-parser'); // node 16버전에서는 express로 편입 호출필요없음
const router = express.Router();

//req.body 요청데이터를 json으로 전환실행해라
router.use(bodyParser.json());
//node 16버전에서는 bodyParser.json()를 express.json()으로 쓰면됨



router.get('/',(req, res) => {
    //이전 라우터가 첨부한 내용 확인해보기
    //확인하기 좋은 앱 Advance REST Client 깔면 좋음(선택)
    //res의 send를 한눈에 보기좋게 보여줌
  res.send({ 
    "sql맵파일" :
    req.body.mapper,
    "sql처리":
    req.body.crud, 
    "맵아이디":
    req.body.mapperid
   })

})

module.exports = router;