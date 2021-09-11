// const Person = require('./person');
// // import Person  from './person';


// const person1 = new Person('John Doe', 30);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log(`Called Listener`, data));

// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
//  if(req.url === '/') {

//     fs.readFile(path.join(__dirname, 'public', 'index.html'),(err, content) => {
//         if(err) throw err;
//         res.writeHead(200, { 'Content-Type':Text.hmtl})
//      res.end(content);
//     })
    
//  }


// if(req.url === '/about') {

//     fs.readFile(path.join(__dirname, 'public', 'about.html'),(err, content) => {
//         if(err) throw err;
//         res.writeHead(200, { 'Content-Type':Text.hmtl})
//      res.end(content);
//     })
    
//  };

// if(req.url === '/api/users'){
//     const users = [
//         { name: 'John', age:25 },
//         { name: 'John', age:25 }
//     ];
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));
// }

// Build file path
let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

// console.log(filePath);
// res.end();

// Extension of file
let extname = path.extname(filePath);

// Initial content type
let contentType = 'text/html';

// Check ext and set content type
switch (extname) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
     case '.jpg':
        contentType = 'image/jpg';
        break;

}

//  Read file
fs.readFile(filepath, (er, content) => {
    if(err) {
        if(err.code == 'ENDENT') {
            // page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`Server Error: ${err.code}`);
            })
        } else {
            // some server error
            res.writeHead(200, { 'Content-Type':contentType });
            res.end(content, 'utf8');

        }
    }
})
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
