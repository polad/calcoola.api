var router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    calculators: {
      link: { href: "/calculators" }
    }
  });
});

module.exports = router;
