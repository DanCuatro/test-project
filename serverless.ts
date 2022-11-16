// Load env variables
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });


// Define serverless configuration
let config: any = {};

// Service
config.service = process.env.SVC_NAME;

// Provider
config.provider = {
  name: "aws",
  stage: process.env.STAGE as string,
  runtime: "nodejs14.x",
  timeout: Number(process.env.SVC_TIMEOUT as string),
  deploymentMethod: "direct",
};

// Package
config.package = {
  patterns: [
    "!**", // Exclude all
    "node_modules/**", // Add dependencies
    "dist/**", // Add build source code
    ".env", // Add environment variables
  ],
};

// Function
config.functions = {
  service: {
    handler: "dist/handler.handler",
    events: [
      {
        httpApi: "*",
      },
    ],
  },
};

// Export serverless configuration
module.exports = config;
