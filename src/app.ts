// Express
const express = require('express');
const app = express();

// Env
const env_config = require("./config.ts");

// Start server
const server = app.listen(parseInt(env_config.server_port), () => {
  console.log(`Server started on port ${env_config.server_port}`);
});
