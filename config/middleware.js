module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: env('ENABLE_CACHE', true),
      models: [
        "activities",
        "user-stories",
        "methods",
        "materials",
        "locations",
        "projects"
      ],
    },
  },
});
