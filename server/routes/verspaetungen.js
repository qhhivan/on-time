const express = require('express');
const {
  getAktuellesFach,
  getVerspaetungen,
} = require('../controllers/verspaetungen');

const router = express.Router();
// Stundenplan Routen

router.get('/:klasse', getAktuellesFach);
router.get('/:id', getVerspaetungen);

module.exports = router;
