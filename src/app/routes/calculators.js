var router = require('express').Router();
var CalculatorMapper = require('../mappers/Calculator');

router.get('/', function(req, res) {
  if (req.query.name !== '' ||
      req.query.name !== null ||
      req.query.name !== undefined) {
    CalculatorMapper.getByName(req.query.name, function (err, result) {
      if (err) {
        return res.status(500).
          json({ error: 'Cannot find any formulas with that name.' });
      }
      return res.json(result);
    });
  } else {
    res.json([]);
  }
});

module.exports = router;
