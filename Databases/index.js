const express = require("express");
const {UserModel ,TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWt_SECRET = "parva@123";

mongoose.connect("");
const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password:  password,
        name: name
    })

    res.json({
        message: "You are logged in"
    })
});

app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        },JWt_SECRET);
        res.json({
            token: token
        });
    } else{
        res.status(403).json({
            message: "incorrect credentials"
        })  
    }
});

app.post("/todo",auth, function(req,res){
    const userId = req.userId;
    const title = req.body.title;

    TodoModel.create({
        title,
        userId
    })

    res.json({
        userId: userId
    })
});

app.get("/todos",auth,  async function(req,res){
    const userId = req.userId;
    const users = await TodoModel.find({
        userId: userId
    })
    res.json({
        userId: userId
    })
});

function auth(req,res,next){
    const token = req.headers.token;

    const decoded = jwt.verify(token,JWt_SECRET);

    if(decoded){
        req.userId = decoded.id;
        next();
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

app.listen(3000);
