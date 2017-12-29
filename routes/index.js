var express = require('express');
var router = express.Router();
var execSync = require('child_process').execSync;

/* GET home page. */
router.get('/', function(req, res, next) {
  var content = execSync('jrnl --export text');
  res.render('index', { title: 'jrnl', content: content });
});

module.exports = router;
