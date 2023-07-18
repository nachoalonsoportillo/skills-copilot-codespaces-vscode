// Create a web server
// Listen to a port
// Send a message for any other URL

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const port = 3000;
const hostname = "localhost