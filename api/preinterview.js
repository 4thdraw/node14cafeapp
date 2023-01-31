const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('사전인터뷰 디비연동파일 가져와서 contact하고 보내줘야지')
})
 
module.exports = router ;