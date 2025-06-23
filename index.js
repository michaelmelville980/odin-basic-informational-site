const fs = require("fs");
const path = require("path");
const url = require("url");
const http = require("http");
const PORT = 3000;
const HOST = "localhost";
const dir = "/Users/michael1303/02_Professional/08_Jobs/04_Learning/04_Full_Stack/03_Projects/25_BasicInformationalSite"

const server = http.createServer((req, res) => {

    /* Creating Filepath */
    const parsedUrl = url.parse(req.url, true);
    let filePath = parsedUrl.pathname === '/' ? '/index' : parsedUrl.pathname;
    filePath = path.join(dir, filePath + '.html');

    /* Checking Whether Filepath exists and routing appropriately */
    fs.readFile(filePath, (err, data) => {
        /* Handling URL that doesn't exist */
        if(err) {
            const errorUrl = path.join(dir, '404.html');
            const errorPageData = fs.readFileSync(errorUrl);
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(errorPageData);
        }
        /* Handling Working URL */
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });

});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
