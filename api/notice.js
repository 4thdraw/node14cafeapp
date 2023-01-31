const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended : true }))
//리액트에서 axios로 요청할때 요청url에 데이터를 넣어서 요청
//그 주소를 데이터로 읽어드리도록 실행하자
//예) axios.get('/notice?type=list')
router.get('/', (req, res, next) => {
   // res.send('notice')
    var type = req.query.type; //rud 중 하나
    if(type == 'list'){
        res.send('sql접속할때 select로 해야되것네')
    }
    else if(type == 'write'){
        res.send('sql접속할때 update로 해야되것네')
    }
    else{
        res.send('sql접속할때 delete로 해야되것네')
    }
})


module.exports = router;