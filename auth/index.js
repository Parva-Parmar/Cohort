const express = require("express");

const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomdekuiloveuraraka"

const app = express();

app.use(express.json());

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
const users = [];

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in"
    }) 
})

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;


    foundUser = null

    for(let i = 0 ;i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        foundUser.token = token
        res.json({
            token: token
        })
    } else{
        res.status.send(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users)
})

app.get("/me" , function(req,res){
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const username = decodedInformation.username;
    let foundUser = null;

    for(let i = 0 ; i < users.length ; i++){
        if(users[i].token == token){
            foundUser = users[i]
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else{
        res.json({
            message: "token invalid"
        })
    }

})

app.listen(3000);