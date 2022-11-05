const express = require("express");
const worksRouter = express.Router();

worksRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the works to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the works: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /works");
  })
  .delete((req, res) => {
    res.end("Deleting all works");
  });

module.exports = worksRouter;
