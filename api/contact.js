const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('면접제안 디비연동파일 가져와서 contact하고 sql저장해야지')
})
 
module.exports = router ;