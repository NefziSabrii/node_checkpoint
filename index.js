const fs = require("fs");
const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) throw err;
    console.log("File created successfully!");
  });
  
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });