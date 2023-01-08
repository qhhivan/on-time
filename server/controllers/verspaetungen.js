const asyncHandler = require('express-async-handler');
const model = require('../model/verspaetungen');

// CONTROLLERS

// Fächer
const getAktuellesFach = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(
      await model.getAktuellesFach(
        req.params.klasse,
        req.query.uhrzeit,
        req.query.tag,
      ),
    );
});

// Verspätungen
const getVerspaetungen = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(await model.getVerspaetungen(req.params.id));
});

module.exports = { getAktuellesFach, getVerspaetungen };
