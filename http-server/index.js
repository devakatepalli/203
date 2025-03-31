const http = require("http");
const fs = require("fs");
const path = require("path");
const minimist = require("minimist");

// Get command line arguments
const args = minimist(process.argv.slice(2));
const PORT = args.port || 3000; // Default to 3000 if no port is provided

const server = http.createServer((req, res) => {
    let filePath = "";

    if (req.url === "/" || req.url === "/home") {
        filePath = path.join(__dirname, "home.html");
    } else if (req.url === "/project") {
        filePath = path.join(__dirname, "project.html");
    } else if (req.url === "/registration") {
        filePath = path.join(__dirname, "registration.html");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
        return;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
        }
    });
});

// Start server on the provided port
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
