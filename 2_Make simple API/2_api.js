const http=require('http');
const data=require('./2_data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(8383);