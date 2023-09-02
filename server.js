const express = require('express');
const app = express();
let port = 3000;
const path = require('path');

app.use('/Home',express.static(path.join(__dirname,'/public')));

app.get('/',(req,res,next)=>{
    var linkfile = path.join(__dirname,'/public/home.html');
    res.sendFile(linkfile);
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})



