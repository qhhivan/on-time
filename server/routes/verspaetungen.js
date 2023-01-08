const express = require('express');
const {
  getAktuellesFach,
  getVerspaetungen,
  postVerspaetung,
} = require('../controllers/verspaetungen');

const router = express.Router();
// Stundenplan Routen

router.get('/:klasse', getAktuellesFach);
router.get('/:id', getVerspaetungen);

// POST
router.post('/', postVerspaetung);
module.exports = router;
