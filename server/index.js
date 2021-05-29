require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const pg = require('pg');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);

app.use(errorMiddleware);

app.post('/api/auth/sign-up', (req, res) => {
  const {username, password} = req.body;
  if(!username || !password){
    res.status(400).json({
      error: "username, password are required fields"
    });
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username"
      `;
      const params = [username, hashedPassword];
      return db.query(sql,params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(400).json({
        error: 'an unexpected error occured'
      });
    });
});

app.post('/api/auth/sign-in', (req, res) => {
  const {username, password} = req.body;
  if(!username || !password){
    return res.status(400).json({
      error: 'invalid login, please enter correct username or password'
    });
  }

  const sql = `
    select "userId", "hashedPassword"
      from "users"
      where "username = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      if(!user){
        return res.status(401).json({
          error: 'invalid login'
        });
      }

      const {userId, hashedPassword} = user;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if(!isMatching){
            return res.status(401).json({
              error: 'invalid login'
            });
          }

          const payload = {userId, username};
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          return res.json({token, user: payload});
        })
        .catch(error => {
          console.error(error);
        });
    });
});


// app.get('/https://v3.football.api-sports.io/leagues/', (req, res) => {
//   req.headers['x-apisports-key'] = "55079badf90d509b71c69c823d5f377e";
//   req.params =




// })





app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
