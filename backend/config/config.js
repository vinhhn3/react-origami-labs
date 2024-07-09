const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 9999,
    // Need to update your MongoDB URI here
    dbURL:
      "mongodb+srv://vinhhn3:yHmh4dN5piXBPEI4@cluster0.hdjsj3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/origami",
    authCookieName: "x-auth-token",
  },
  production: {},
};

module.exports = config[env];
