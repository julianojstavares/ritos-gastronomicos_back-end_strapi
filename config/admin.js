module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2fc76e38396ceb970f0fd6b66fa58e67'),
  },
});
