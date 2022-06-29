CREATE DATABASE limmy;

CREATE TABLE question(
  id SERIAL PRIMARY KEY,
  content text NOT NULL,
  optionZero VARCHAR(250) NOT NULL,
  optionOne VARCHAR(250) NOT NULL,
  qid INTEGER, salt VARCHAR(10),
  result INTEGER,
  startDate date,
  endDate date
)

CREATE TABLE votes(
  address VARCHAR(50), 
  option INTEGER,
  unix VARCHAR(50), 
  salt VARCHAR(10), 
  qid INTEGER, 
  foreignKey INTEGER,
  FOREIGN KEY (foreignKey) REFERENCES question ON DELETE CASCADE ON UPDATE CASCADE
)


//inserting votes
INSERT INTO votes (address, option, unix, salt) VALUES (SELECT ${address}, ${option}, ${unix}, salt FROM question WHERE qid = ${qid})

//inserting questions
INSERT INTO question(content, optionZero, optionOne, salt) VALUES (${content}, ${optionZero}, ${optionOne}, ${salt})

//get current question
SELECT content, optionZero, optionOne FROM question WHERE qid = ${qid}

//get historical question
SELECT content, optionZero, optionOne, result FROM question WHERE qid != ${qid} ORDER BY qid DESC

