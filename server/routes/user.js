const express = require('express');
const { getUser, postUser, getKlassenID } = require('../controllers/user');

const router = express.Router();
// User Routen

router.get('/:id', getUser);
router.post('', postUser);
router.get('/klasse/:name', getKlassenID);

module.exports = router;
