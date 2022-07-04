# Nodejs

## Description

This repository serves as the backend for the limmy project. The solidity and frontend code can be found in the other repository. The API endpoints are created for the following functions.

1. Admin

- Updating question database
- Emergency refunding of ETH when needed
- Submit data to smart contract during reveal phase

2. Getting

- Get current question of the week
- Get salt of current question
- Get historical questions

3. Posting

- Submit vote to database

# Environment vars

This project uses the following environment variables:

| Name     | Description                  | Default Value |
| -------- | ---------------------------- | ------------- |
| PASSWORD | Password for reveal function | "password"    |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 8.0.0

# Getting started

- Clone the repository

```
git clone  <git lab template url> <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

```
npm start
```

Navigate to `http://localhost:5000`

## Project Structure

The simple folder structure of this app is explained below:

| Name               | Description                                          |
| ------------------ | ---------------------------------------------------- | --- | ------------------------------------ |
| **routes**         | Contains all the different API endpoints             |
| **node_modules**   | Contains all npm dependencies                        |
| **routes/admin**   | Contains API endpoints for admin functions           |
| **routes/getting** | Contains API endpoints for all get functions         |
| **routes/posting** | Contains API endpoint to submit vote                 |
| **app**            | Entry point to express app                           |
| **db**             | Setting up database                                  |
| package.json       | Contains npm dependencies as well as [build scripts] | t   | Config settings for compiling source |

## Building the project

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description                         |
| ---------- | ----------------------------------- |
| `start`    | Runs the backend server `npm start` |

## npm install fails

The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.
