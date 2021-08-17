const http = require('http');

const server = http.createServer( ( req, res ) => {
    if(req.url === '/'){
        res.write('Welcome to our Home page');
    }
    if(req.url === '/about'){
        res.write('Here is our short history');
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't semm to find the page you are looking for</p>
    <a href="/">Back to home</a>`
    );
});

server.listen(5000);