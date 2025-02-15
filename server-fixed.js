const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using setImmediate to yield control
  let counter = 0;
  function loop(){
    counter++;
    if(counter < 5000){
        setImmediate(loop);
    }else{
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    }
  }
  loop();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});