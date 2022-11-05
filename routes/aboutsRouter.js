const express = require("express");
const aboutsRouter = express.Router();

aboutsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the abouts to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the abouts: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /abouts");
  })
  .delete((req, res) => {
    res.end("Deleting all abouts");
  });

module.exports = aboutsRouter;
