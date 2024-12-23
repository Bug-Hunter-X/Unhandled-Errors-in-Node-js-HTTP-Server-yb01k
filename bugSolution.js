const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    //Simulate an error
    //const data = JSON.parse('{ "a":1}');
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello, World!' }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});