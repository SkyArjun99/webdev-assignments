const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // ==========================================
    // FIX: STATIC FILE HANDLER (For CSS/JS/Images)
    // ==========================================
    // If the request ends with .css, .js, .jpg, etc.
    if (parsedUrl.pathname.match(/\.(css|js|png|jpg|jpeg)$/i)) {
        const filePath = path.join(__dirname, parsedUrl.pathname);
        
        // Determine content type
        const extname = String(path.extname(filePath)).toLowerCase();
        const mimeTypes = {
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.jpg': 'image/jpeg',
            '.png': 'image/png'
        };
        const contentType = mimeTypes[extname] || 'application/octet-stream';

        // Read and send the file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('File not found', 'utf-8');
                } else {
                    res.writeHead(500);
                    res.end('Server Error: ' + err.code);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }

    // ==========================================
    // HTML HOME PAGE
    // ==========================================
    else if (req.method === 'GET' && parsedUrl.pathname === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }

    // ==========================================
    // FORM SUBMISSION (POST)
    // ==========================================
    else if (req.method === 'POST' && parsedUrl.pathname === '/submit') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            // Manual parsing to be safe
            const data = {};
            body.split('&').forEach(pair => {
                const [key, value] = pair.split('=');
                data[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
            });

            console.log(`\n[ CLASSIFIED TRANSMISSION RECEIVED ]`);
            console.log(`Agent: ${data.codename}`);
            console.log(`Message: ${data.mission}\n`);

            // Send success HTML back
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <html>
                <head><link rel="stylesheet" href="styles.css"></head>
                <body>
                    <div class="container">
                        <h1>TRANSMISSION SUCCESS</h1>
                        <p>DATA SECURELY ARCHIVED.</p>
                        <a href="/" style="color:#00ff41">[ RETURN TO UPLINK ]</a>
                    </div>
                </body>
                </html>
            `);
        });
    }

    // 404 Fallback
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - ROUTE NOT FOUND');
    }
});

server.listen(PORT, () => {
    console.log(`\n[ SYSTEM ONLINE ]`);
    console.log(`Server running at http://localhost:${PORT}\n`);
});