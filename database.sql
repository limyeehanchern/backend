CREATE TABLE question(qid SERIAL PRIMARY KEY,content text NOT NULL,optionZero VARCHAR(250) NOT NULL,optionOne VARCHAR(250) NOT NULL, salt VARCHAR(10),result INTEGER,startDate date,endDate date)

CREATE TABLE votes(address VARCHAR(50) NOT NULL, option INTEGER NOT NULL,unix VARCHAR(50) NOT NULL, salt VARCHAR(10) NOT NULL, qid INTEGER NOT NULL, FOREIGN KEY (qid) REFERENCES question ON DELETE CASCADE ON UPDATE CASCADE)

//inserting votes
INSERT INTO votes (address, option, unix, salt, qid) VALUES (SELECT ${address}, ${option}, ${unix}, salt, ${qid} FROM question WHERE qid = ${qid})

//inserting questions
INSERT INTO question(content, optionZero, optionOne, salt) VALUES (${content}, ${optionZero}, ${optionOne}, ${salt})

//get current question
SELECT content, optionZero, optionOne FROM question WHERE qid = ${qid}

//get historical question
SELECT content, optionZero, optionOne, result FROM question WHERE qid != ${qid} ORDER BY qid DESC

//getting data for reveal
SELECT address, option, unix, salt FROM votes WHERE qid = ${qid}

//getting salt
SELECT salt FROM question WHERE qid = ${qid}


