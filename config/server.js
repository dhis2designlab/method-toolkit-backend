module.exports = ({ env }) => ({
  host: env('HOST', "0.0.0.0"),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', "'507f6c2c4b470a4881855c3670e267e0'"),
    },
  },
});
