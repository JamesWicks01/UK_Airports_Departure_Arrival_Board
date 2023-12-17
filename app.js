const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Read the HTML file from the 'public' folder
  const filePath = path.join(__dirname, 'client', 'index.html');
  const stream = fs.createReadStream(filePath);

  // Pipe the HTML content to the response
  stream.pipe(res);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


