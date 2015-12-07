module.exports = {
  appListenPort: 3000,
  dbConnection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
  }
};
