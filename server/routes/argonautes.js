const express = require("express");
const router = express.Router();
const Argonaute = require("../models/argonaute");

//create
router.post("/", function (req, res, next) {
  Argonaute.create(req.body)
    .then((respondApi) => {
      res.status(200).send(respondApi);
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
});

//read
router.get("/list", function (req, res, next) {
  Argonaute.find()
    .then((respondApi) => {
      res.status(200).send(respondApi);
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
});

module.exports = router;
