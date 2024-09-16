// เรียกใช้งาน express
const express = require('express');
// const debug = require('debug');
// const morgan = require('morgan');
const app = express();
// port
const port = 3000;

// จัดการ require
app.get("/", (req, res) =>{
    res.send('Hello World');
})
// ให้รอฟัง require 
app.listen(port, ()=>{
    console.log("Listening on port %d", port);
    // debug("Listening on port %d", port);
})