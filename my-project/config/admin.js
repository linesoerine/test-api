module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bfe9d7aa47e05fcb254087ae1692c430'),
  },
});
