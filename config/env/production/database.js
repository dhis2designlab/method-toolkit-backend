module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {
        "pool": {
          "min": env.int('KNEX_POOL_MIN_CONNECTIONS', 0),
          "max": env.int('KNEX_POOL_MAX_CONNECTIONS', 50),
          "idleTimeoutMillis": env.int('KNEX_POOL_IDLE_TIMEOUT_MILLIS', 60000),
          "createTimeoutMillis": env.int('KNEX_POOL_CREATE_TIMEOUT_MILLIS', 60000),
          "acquireTimeoutMillis": env.int('KNEX_POOL_AQUIRE_TIMOUT_MILLIS', 60000)
        }
      },
    },
  },
});
