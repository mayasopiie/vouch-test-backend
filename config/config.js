require('dotenv-extended').load({
    encoding: 'utf8',
    silent: true,
    path: '.env',
    defaults: '.env.defaults',
    schema: '.env.schema',
    errorOnMissing: true,
    errorOnExtra: true,
    assignToProcessEnv: true,
    overrideProcessEnv: false
  })
  
  module.exports = {
    development: {
      user: process.env.DEVELOPMENT_MONGO_USER,
      pass: process.env.DEVELOPMENT_MONGO_PASS,
      db: process.env.DEVELOPMENT_MONGO_DATABASE,
      host: process.env.DEVELOPMENT_MONGO_HOST,
      port: process.env.DEVELOPMENT_MONGO_PORT
    },
    test: {
      user: process.env.TEST_MONGO_USER,
      pass: process.env.TEST_MONGO_PASS,
      db: process.env.TEST_MONGO_DATABASE,
      host: process.env.TEST_MONGO_HOST,
      port: process.env.TEST_MONGO_PORT
    },
    production: {
      user: process.env.PRODUCTION_MONGO_USER,
      pass: process.env.PRODUCTION_MONGO_PASS,
      db: process.env.PRODUCTION_MONGO_DATABASE,
      host: process.env.PRODUCTION_MONGO_HOST,
      port: process.env.PRODUCTION_MONGO_PORT
    }
  }