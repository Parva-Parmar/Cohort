const express = require('express');
const { userRouter } = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { default: mongoose } = require('mongoose');
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);


async function main() {
    await mongoose.connect("mongodb+srv://parva04cp:u6lTTYAT8FCOPn82@cluster0.rq6ojvr.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("listning to port 3000");    
}

main()
