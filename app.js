// เรียกใช้งาน express
const express = require('express');
// const debug = require('debug')('app');
// const morgan = require('morgan');
const app = express();
// port
const port = 3000;

const path = require('path')

// บอกให้รู้ว่า static file อยู่ที่ไหน
app.use(express.static(path.join(__dirname, "/public/")))

// จัดการ require
app.get("/", (req, res) =>{
    res.send('Hello World');
})
// ให้รอฟัง require 
app.listen(port, ()=>{
    console.log("Listening on port %d", port);
    // debug("Listening on port %d", port);
})