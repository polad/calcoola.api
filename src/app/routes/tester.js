var router = require('express').Router();
var TestRunner = require('../../migrations/data/runner');

router.post('/', function(req, res) {
  debugger;
  var calculators = JSON.parse(req.body.calculators || []);
  TestRunner.run(calculators, function(err, results) {
    if (err) {
      return res.status(500).
        json({ error: 'Error testing provided calculators.' });
    }
    return res.json(results);
  });
});

module.exports = router;
