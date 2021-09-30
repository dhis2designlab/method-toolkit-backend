module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: env('ENABLE_CACHE', true),
      models: [
        "activities",
        "examples",
        "techniques",
        "materials",
        "locations",
      ],
    },
  },
});
