module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: env('ENABLE_CACHE', true),
      models: [
        "activities",
        "methods",
        "materials",
        "locations",
        "projects",
        "user-stories"
      ],
    },
    logger: {
      level: env('LOGGER_LEVEL', 'debug'),
      exposeInContext: env('LOGGER_EXPOSE_IN_CONTEXT', true),
      requests: env('LOGGER_REQUESTS', false),
    }
  },
});
