var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('barbeque', { title: 'Search results barbeque specials' });
});

module.exports = router;