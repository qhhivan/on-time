const express = require('express');
const { getStundenplan, getFaecher } = require('../controllers/stundenplan');

const router = express.Router();
// Stundenplan Routen

router.get('/:klasse/:sjahr(*)', getStundenplan);
router.get('/faecher', getFaecher);

module.exports = router;
