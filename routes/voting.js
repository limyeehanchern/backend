const express = require("express");
const router = express.Router();
const Pool = require("pg").Pool;

router.get("/", (req, res) => {
  res.send("voting");
});

router.post("/", (req, res) => {
  console.log(req.body);
  // pool.query(
  //   "CREATE TABLE question(id SERIAL PRIMARY KEY,content text NOT NULL,optionZero VARCHAR(250) NOT NULL,optionOne VARCHAR(250) NOT NULL,qid INTEGER, salt VARCHAR(10),result INTEGER,startDate date,endDate date)",
  //   (err, res) => {
  //     if (err) {
  //       console.log("Tables already created");
  //       return;
  //     }
});

module.exports = router;
