const asyncHandler = require('express-async-handler');
const model = require('../model/user');

// CONTROLLERS

// Userdaten
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getUser(req.params.id));
});

const postUser = asyncHandler(async (req, res) => {
  res.status(200).json(await model.postUser(req.body));
});

const getKlassenID = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getKlassenID(req.params.name));
});
module.exports = { getUser, postUser, getKlassenID };
