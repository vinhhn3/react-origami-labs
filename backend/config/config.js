const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 9999,
    // Need to update your MongoDB URI here
    dbURL: "mongodb://localhost:27017/rest-api-db",
    authCookieName: "x-auth-token",
  },
  production: {},
};

module.exports = config[env];
