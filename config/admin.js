module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd1449151ce096e1a0ba71431c93fc68c'),
  },
});
