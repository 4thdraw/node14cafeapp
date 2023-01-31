const express = require('express');

const router = express.Router();

router.get('/',(req, res) => {
  res.send('일단 여기까지 잘왔구나. 성공')
})

module.exports = router;