// Express
const express = require('express');
const app = express();

// logger
const morgan = require('morgan');
const logger = require('./logger');
logger.initialize();
app.use(morgan('combined'));
app.use(morgan('combined', {stream: logger.AccessLogStream}));
// Rewrite console.log to Morgan's stream
const originalConsoleLog = console.log;
console.log = function (...args) {
  originalConsoleLog.apply(console, args);
  const message = args.map(arg => 
    typeof arg === 'string' ? arg : JSON.stringify(arg)
  ).join(' ');
  logger.AccessLogStream.write(message + '\n');
};


// Env
const env_config = require("./config.ts");

// Start server
const server = app.listen(parseInt(env_config.server_port), () => {
  console.log(`Server started on port ${env_config.server_port}`);
});
