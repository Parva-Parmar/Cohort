const express = require('express');

const app = express()

let requestCount = 0;

function requestIncreaser(){
    requestCount += 1;
    console.log(`Total number of requests = ${requestCount}`);
}

// better routing, add database, middleware
app.get("/sum", function(req,res){
    requestIncreaser()
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a+b,
    })
});

app.get("/multiply", function(req,res){
    requestIncreaser()
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a*b,
    })
});

app.listen(3000);