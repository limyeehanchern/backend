const express = require("express");
const router = express.Router();
const web3 = require("../web3");
const pool = require("./pool");

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

router.post("/emergencyrepay", (req, res) => {
  console.log(req.body);
});

router.post("/reveal", (req, res) => {
  const { password, qid } = req.body;
  if (password != "password") {
    console.log("wrong password");
    res.sendStatus(401);
    return;
  }

  let result;
  console.log("qid is: " + qid);

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

  pool.query(
    `SELECT address, option, unix, salt FROM votes WHERE qid = ${qid};`,
    (err, tup) => {
      if (err) {
        console.log(err);
        console.log("Question error");
        return;
      }
      console.log(tup.rows);
      res.status(201).send(tup.rows);
    }
  );
});

module.exports = router;
