// dotenv setting
require('dotenv').config();

// Environment setting
const server_port : string = process.env.SERVER_PORT || "3000";

// Exporting the configuration
module.exports = {
    server_port: server_port
}
