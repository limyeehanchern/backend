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
