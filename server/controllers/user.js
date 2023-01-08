const asyncHandler = require('express-async-handler');
const model = require('../model/user');

// CONTROLLERS

// Userdaten
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getUser(req.params.id));
});
// Stundenplan
// usw.

// const getMovies = asyncHandler(async (req, res) => {
//   res.status(200).json(await model.getMovies());
// });

module.exports = { getUser };
