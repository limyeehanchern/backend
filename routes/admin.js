const express = require("express");
const router = express.Router();
const web3 = require("../web3");
const pool = require("./pool");
require("dotenv").config();

router.post("/postquestion", (req, res) => {
  const { content, optionzero, optionone, salt } = req.body;
  pool.query(
    `INSERT INTO question (content, optionzero, optionone, salt) VALUES ('${content}', '${optionzero}', '${optionone}', '${salt}');`,
    (err, res) => {
      if (err) {
        console.log(err);
        console.log("Question error");
        return;
      }
    }
  );
});

function updateResults(qid) {
  let result;
  pool.query(
    `SELECT (SELECT COUNT(*) as res FROM votes WHERE qid =  ${qid} AND OPTION = 0)*100/COUNT(*) FROM votes WHERE qid = ${qid}`,
    (err, tup) => {
      if (err) {
        console.log(err);
        return;
      }
      result = Object.values(tup.rows[0])[0];

      pool.query(
        `UPDATE question SET result =(${result}) where qid = ${qid};`,
        (err, res) => {
          if (err) {
            console.log(err);
            console.log("Question error");
            return;
          }
        }
      );
    }
  );
}

router.post("/emergencyrepay", (req, res) => {
  const { qid } = req.body;
  updateResults(qid);
});

router.post("/reveal", (req, res) => {
  const { password, qid } = req.body;
  if (password != process.env.PASSWORD) {
    console.log("wrong password");
    res.sendStatus(401);
    return;
  }

  updateResults(qid);

  pool.query(
    `SELECT address, option, unix, salt FROM votes WHERE qid = ${qid};`,
    (err, tup) => {
      if (err) {
        console.log(err);
        console.log("Question error");
        return;
      }
      res.status(201).send(tup.rows);
    }
  );
});

module.exports = router;
