const express = require('express');
const redis = require('redis');
const formatter = require('./shl-api-formatter');
const config = require('./config');
const { ShlConnection } = require('./shl-connection');
const { ShlClient } = require('./shl-client');

const redisClient = redis.createClient({
  host: config.redisHost,
  port: config.redisPort,
  retry_strategy: () => 1000,
});

const app = express();
const shl = new ShlClient(new ShlConnection(config.shlId, config.shlSecret));
app.use(require('helmet')());
app.use(require('cors')());

app.get('/standings', (_, res) => redisClient.get('standings', (err, standings) => {
  if (err) return res.status(500).send(err);
  if (standings) return res.json({ soure: 'cache', data: JSON.parse(standings) });

  return shl.season(2019).statistics.teams.standings()
    .then((apiResponse) => {
      console.log(apiResponse);
      const formatedResponse = formatter.standings(apiResponse);
      redisClient.setex(
        'standings',
        config.cacheLifeSpan,
        JSON.stringify(formatedResponse),
      );
      return res.json({ source: 'api', data: formatedResponse });
    });
}));


app.get('/games', (_, res) => redisClient.get('games', (err, games) => {
  if (err) return res.status(500).send(err);
  if (games) return res.json({ soure: 'cache', data: JSON.parse(games) });

  return shl.season(2019).games()
    .then((apiResponse) => {
      const formatedResponse = formatter.games(apiResponse);
      redisClient.setex(
        'games',
        config.cacheLifeSpan,
        JSON.stringify(formatedResponse),
      );
      return res.json({ source: 'api', data: formatedResponse });
    });
}));

app.get('/goalies', (_, res) => redisClient.get('goalies', (err, standings) => {
  if (err) return res.status(500).send(err);
  if (standings) return res.json({ soure: 'cache', data: JSON.parse(standings) });

  return shl.season(2019).statistics.goalkeepers()
    .then((apiResponse) => {
      const formatedResponse = formatter.goalies(apiResponse);
      redisClient.setex(
        'goalies',
        config.cacheLifeSpan,
        JSON.stringify(formatedResponse),
      );
      return res.json({ source: 'api', data: formatedResponse });
    });
}));

app.get('/players', (_, res) => redisClient.get('players', (err, players) => {
  if (err) return res.json({ error: err });
  if (players) res.json({ soure: 'cache', data: JSON.parse(players) });

  return shl.season(2019).statistics.players()
    .then((apiResponse) => {
      const formatedResponse = formatter.goalies(apiResponse);
      redisClient.setex(
        'players',
        config.cacheLifeSpan,
        JSON.stringify(formatedResponse),
      );
      return res.json({ source: 'api', data: formatedResponse });
    });
}));

app.get('/winstreaks', (req, res) => redisClient.get('winstreaks', (err, winstreaks) => {
  if (err) return res.status(500).send(err);
  if (winstreaks) return res.json({ soure: 'cache', data: JSON.parse(winstreaks) });

  return shl.season(2019).games()
    .then((apiResponse) => {
      const formatedResponse = formatter.winstreaks(apiResponse);
      redisClient.setex(
        'winstreaks',
        config.cacheLifeSpan,
        JSON.stringify(formatedResponse),
      );
      return res.json({ source: 'api', data: formatedResponse });
    });
}));

app.listen(config.port);
