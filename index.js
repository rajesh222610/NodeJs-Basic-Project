import http from 'http'
// import url from 'url'
// const http = require('http');

const getRes = (req, res) => {
    console.log("req-----------", req.url)
    res.writeHeader(200,{'Content-Type': 'text/JSON'})
    if(req.url !== '/users') res.end('Not Found')
    req.on('data', (chunk) => {
        let data = chunk.toString()
        data = JSON.parse(data)
        data = {...data, 'age':30}
        console.log("data---------",data)
        // ress.push(data)
        res.end(JSON.stringify(data));
    })
}
const server = http.createServer(getRes);

server.listen(3000, ()=> {
    console.log("server running")
})