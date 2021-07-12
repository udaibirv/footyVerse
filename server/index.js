require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const pg = require('pg');
const request = require('request');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.use(errorMiddleware);

app.post('/api/auth/sign-up', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      error: 'username, password are required fields'
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
      return db.query(sql, params);
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
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: 'invalid login, please enter correct username or password'
    });
  }

  const sql = `
    select "userId", "hashedPassword"
      from "users"
      where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      if (!user) {
        return res.status(401).json({
          error: 'invalid login'
        });
      }

      const { userId, hashedPassword } = user;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if (!isMatching) {
            return res.status(401).json({
              error: 'invalid login'
            });
          }

          const payload = { userId, username };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          return res.json({ token, user: payload });
        })
        .catch(error => {
          console.error(error);
        });
    });
});

app.get('/api/leauge-info/england', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/england/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2019',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/england/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2016',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/england/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2017',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/england/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/germany/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=78&season=2016',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/germany/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=78&season=2017',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/germany/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=78&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/germany/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=78&season=2019',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/germany/2020', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=78&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/france', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=61&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});
app.get('/api/leauge-info/france/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=61&season=2016',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/france/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=61&season=2017',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/france/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=61&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/france/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=61&season=2019',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/spain/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=140&season=2016',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/spain/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=140&season=2017',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/spain/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=140&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/spain/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=140&season=2019',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/spain', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=140&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/italy/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=135&season=2016',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/italy/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=135&season=2017',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/italy/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=135&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/italy/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=135&season=2019',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/leauge-info/italy/2020', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=135&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/england-top-scorers/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2016&league=39',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/england-top-scorers/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2017&league=39',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/england-top-scorers/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2018&league=39',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/england-top-scorers/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2019&league=39',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/england-top-scorers/2020', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2020&league=39',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/germany-top-scorers/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2016&league=78',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/germany-top-scorers/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2017&league=78',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/germany-top-scorers/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2018&league=78',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/germany-top-scorers/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2019&league=78',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/germany-top-scorers/2020', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2020&league=78',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/france-top-scorers/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2016&league=61',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/france-top-scorers/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2017&league=61',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/france-top-scorers/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2018&league=61',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/france-top-scorers/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2019&league=61',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/france-top-scorers/2020', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2020&league=61',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/italy-top-scorers/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=135&season=2016',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/italy-top-scorers/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=135&season=2017',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/italy-top-scorers/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=135&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/italy-top-scorers/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=135&season=2019',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/italy-top-scorers/2020', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=135&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/spain-top-scorers/2016', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=140&season=2016',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/spain-top-scorers/2017', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=140&season=2017',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/spain-top-scorers/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=140&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/spain-top-scorers/2019', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=140&season=2019',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/spain-top-scorers/2020', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?league=140&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
