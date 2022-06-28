const express = require("express");
const router = express.Router();
const Pool = require("pg").Pool;

router.get("/", (req, res) => {
  res.send("admin");
});

router.post("/postquestion", (req, res) => {
  console.log(req.body);
});

router.post("/postquestion", (req, res) => {
  console.log(req.body);
});

router.post("/emergencyrepay", (req, res) => {
  console.log(req.body);
});

router.post("/reveal", (req, res) => {
  console.log(req.body);
});

module.exports = router;
