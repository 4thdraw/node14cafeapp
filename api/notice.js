const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended : true }))

router.get('/', (req, res, next) => {
   
    var type = req.query.type; //bodyParser.urlencoded 이후 반드시 실행
    //요청이 목록인지 글쓰기인지 삭제인지 구분해서 처리
    if(type == 'list'){
        //목록요청
        try{
            //DB연결하고 sql문 가져와서 보내주는 모듈_여기가 진짜 작업하는 곳
            const dbcon = require('../db/dbconnect');
            //작업을 보내기 전에 내가 필요한 정보 더!!!! 담아서 보내주기
            //그 정보는 xml에 저장된 구체작인 sql문을 담아서 보내주는 것임
            //기존의 요청 내용에 나의 3가지 변수를 더 추가해서 next메서드로 보내줌
            req.body.mapper = 'sqlQueryNm';
            req.body.crud = 'select'; // crud중 하나 반드시 선정
            req.body.mapperid = 'selectmapid';

            router.use('/',dbcon);
            next('route');
        }
        catch(error){
            console.log("디비연결에 오류")
        }

       
    }
    else if(type == 'write'){
        res.send('sql접속할때 update로 해야되것네')
    }
    else{
        res.send('sql접속할때 delete로 해야되것네')
    }
})


module.exports = router;