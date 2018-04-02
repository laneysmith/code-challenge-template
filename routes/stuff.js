var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(coolStuff());
});

router.post('/', function(req, res, next) {
  res.json(coolStuff(req.body));
});

function coolStuff(params) {
  if (params) {
    return {'coolThing': params}
  }
  return {'coolThing': 'respond with a resource'}
}

module.exports = router;