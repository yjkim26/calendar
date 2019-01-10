const Dotenv = require("dotenv-webpack");
const withTypescript = require("@zeit/next-typescript");
const path = require("path");

module.exports = withTypescript({
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path:
          process.env.NODE_ENV === "development"
            ? path.join(__dirname, ".env.development")
            : path.join(__dirname, `.env.${process.env.NODE_ENV}`),
        systemvars: true
      })
    ];

    return config;
  }
});
