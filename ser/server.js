import fs from 'node:fs'
import http from 'http'
let req=0
const server=http.createServer((req,res)=>{
     let path='./ser/'
     switch(req.url){
        case '/':
            path+='index.html'
            break;
     }
     fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.getHeader("content-type", "plain/html");

      res.end(data);
    })
      
})

server.listen(8080).addListener('request',()=>{
  req++
  if(req++){
  fs.writeFile('./ser/ind.txt',`${req}new request`,()=>{})

  }
})