const asyncHandler = require('express-async-handler');
const model = require('../model/stundenplan');

// CONTROLLERS

// Userdaten
const getStundenplan = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(await model.getStundenplan(req.params.klasse, req.params.sjahr));
});

// Fächer
const getFaecher = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getFaecher());
});

module.exports = { getStundenplan, getFaecher };
