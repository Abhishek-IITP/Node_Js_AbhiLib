const http=require('http');
const fs=require('fs');

const server=http.createServer(function(req,res){
    // res.end('<h1>my first server</h1>')
    let path = req.url.slice(1).toLocaleUpperCase();
    path?"":path="Abhi";
    let filePath= __dirname + '/index.html';
    if (req.url == '/' || req.url == '/about'){
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
            if(err) throw new Error("Not Found")
            else{
        data = data.replace("[path]", path )
            res.end(data)}
            })
        

    }
    else{
        res.end(JSON.stringify({message:"not found"}))
    }


})

server.listen(3000 , ()=>{
    console.log('first server is running on port 3000')
})