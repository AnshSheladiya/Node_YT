const http=require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify({name:'Ansh',email:'ansh@gmail.com'}));
    resp.end();
}).listen(8383);