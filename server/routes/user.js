const express = require('express');
const { getUser } = require('../controllers/user');

const router = express.Router();
// User Routen

router.get('/:id', getUser);

module.exports = router;
