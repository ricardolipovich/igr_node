var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('quienessomos', { isQuienessomos: true });
  });
module.exports = router;