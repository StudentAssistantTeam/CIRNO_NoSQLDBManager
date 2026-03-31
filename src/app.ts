// Express
const express = require('express');
const app = express();

// logger
const logger = require('./logger');
logger.initialize();

// Env
const env_config = require("./config.ts");

// Start server
const server = app.listen(parseInt(env_config.server_port), () => {
  console.log(`Server started on port ${env_config.server_port}`);
});
