const express = require('express');

const app = express()

let requestCount = 0;

function requestIncreaser(){
    requestCount += 1;
    console.log(`Total number of requests = ${requestCount}`);
}

function realSumHandler(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log("The sum is \n")
    console.log(a+b);
    res.json({
        ans: a+b,
    });
}

function realMultiplyHandler(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a*b,
    });
}

// better routing, add database, middleware
app.get("/sum", requestIncreaser, realSumHandler);

app.get("/multiply",requestIncreaser,realMultiplyHandler);

app.listen(3000);