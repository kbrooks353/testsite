const http = require("http");
const fs = require('fs').promises;

const host = '0.0.0.0';
const port = 8000;

const requestListener = function(req, res){
    
    if(req.headers.host && req.headers.host.startsWith('www')){
        console.log("hi");
        console.log(req.headers);
        res.writeHead(301, {Location });
        return;
    }
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://')
})