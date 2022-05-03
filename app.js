const http=require('http');
const fs=require('fs');


const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        var today = new Date();
        var year =today.getFullYear();
        var mon = today.getMonth();
        var date= today.getDate();
        var timezone =new Date().toISOString().split('T')[1];
        var times=(timezone.split(".")[0]);
        var time=(times.split(":").join("."));
        var currentdt_time= date+"-"+(mon+1)+"-"+year+"-"+time;
        
        res.write(JSON.stringify({
            current_date_time:currentdt_time
        }))
        var writestram= fs.createWriteStream(`${currentdt_time}.txt`);
        writestram.write(timezone);

    }
    res.end();
});

server.listen(3000);

