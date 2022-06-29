const express = require("express");
const router = express.Router();
const Pool = require("pg").Pool;

router.get("/", (req, res) => {
  res.send("voting");
});

router.post("/", (req, res) => {
  const {address, option, unix, qid} = req.body
  pool.query(
    "INSERT INTO votes (address, option, unix, salt, qid) VALUES (SELECT ${address}, ${option}, ${unix}, salt, ${qid} FROM question WHERE qid = ${qid})",
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
});

module.exports = router;
