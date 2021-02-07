export default () => {
  return {
    environment: process.env.ENVIRONMENT,
    protocol: process.env.PROTOCOL,
    domain: process.env.DOMAIN,
    port: parseInt(process.env.PORT, 10) || 7777,
    fullDomain: {
      development: `${process.env.PROTOCOL}://${process.env.DOMAIN}:${parseInt(process.env.PORT, 10) || 7777}`,
      production: `${process.env.PROTOCOL}://${process.env.DOMAIN}`
    },
    redirects: {
      auth: {
        activation: process.env.URL_ACCOUNT_ACTIVATION
      }
    },
    security: {
      rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      },
      bcrypt: {
        saltRound: parseInt(process.env.BCRYPT_SALT_ROUND, 10)
      },
      jwt: {
        secret: process.env.JWT_SECRET,
        duration: process.env.JWT_DURATION_IN_SECONDS
      }
    },
    database: {
      host: process.env.DATABASE_HOST,
      port: process.env.PORT || 5000,
      name: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASS
    }
  };
};
