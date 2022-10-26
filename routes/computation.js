var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var random = Math.random() * 15;
  res.send(`Math.round() applied to ${random} is ${Math.round(random)}`);
});

router.get('/:id', function(req, res, next) {
  res.send(`Math.round() applied to ${req.params.id} is ${Math.round(req.params.id)}`);
});



module.exports = router;