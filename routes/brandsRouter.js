const express = require("express");
const brandsRouter = express.Router();

brandsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the brands to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the brands: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /brands");
  })
  .delete((req, res) => {
    res.end("Deleting all brands");
  });

module.exports = brandsRouter;
