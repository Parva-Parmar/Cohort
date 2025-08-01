const {Router} = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin.js")
const {JWT_ADMIN_PASSWORD} = require("../config");

adminRouter.post("/signup" , async function(req,res){
    const {email,password,firstName,lastName} = req.body; // use ZOD

    // hash the password


    // use try catch
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup succeded"
    })
})

adminRouter.post("/signin" , async function(req,res){
    const {email,password} = req.body;
    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if (user){
        jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);
        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

adminRouter.post("/course" , adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl, price} = req.body;

    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        createrId: adminId
    })
    res.json({
        message: "course created",
        courseId: course._id
    })
})

adminRouter.put("/course" , adminMiddleware ,async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl, price} = req.body;

    const course = await courseModel.updateOne({
        _id: courseId, 
        createrId: adminId
    },{
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })
    res.json({
        message: "course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk" , adminMiddleware,async function(req,res){
    const adminId = req.userId;
    const courses = await courseModel.find({
        createrId: adminId
    })
    res.json({
        message: "course updated",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}