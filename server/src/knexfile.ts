module.exports = {
    client: 'pg',
    connection:
      process.env.DATABASE_URL ||
      'postgres://postgres:root@localhost:5432/launchgen',
    migrations: {
      directory: './knex/migrations',
    },
    seeds: {
      directory: './knex/seeds',
    },
  }
  