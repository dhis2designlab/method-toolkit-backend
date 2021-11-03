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
  },
});
