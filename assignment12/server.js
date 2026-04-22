const http = require('http');
const port = 3000;

// Router Implementation
const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] Request received: ${req.method} ${req.url}`);

    // Handle Home Route
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html>
            <body style="font-family:sans-serif; text-align:center; padding-top:50px;">
                <h1>Hello World</h1>
                <p>Welcome to the Node.js Server.</p>
                <p>Try visiting <a href="/api">/api</a> or <a href="/time">/time</a></p>
            </body>
            </html>
        `);
        res.end();
    } 
    // Handle JSON API Route
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'success',
            message: 'API Endpoint Reached',
            data: { user: 'Arjun', level: 10 }
        }));
    }
    // Handle Time Route
    else if (req.url === '/time') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Server Time: ${new Date().toString()}`);
    }
    // Handle 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found - Check your navigation, cadet.');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});