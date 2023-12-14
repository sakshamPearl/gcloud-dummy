// ------------------------------------------------Imports----------------------------------------------
const express = require("express");
const chalk  = require("chalk");
const cors = require("cors");
const path = require("path");
const googleUploadMiddleware = require("./src/middleware/fileUploadMiddleware")
// -----------------------------------------------------------------------------------------------------

const app = express();

app.use(cors({
    origin:["http://127.0.0.1:5173"]
}))


app.post("/upload",googleUploadMiddleware.single("mediaFile"),(req,res)=>{
    try {
        if(!req?.file){
            res.json({
                success:true,
                message:""
            })
        }
        res.json({
            success:true,
            message:"File Uploaded Successfully"
        })    
    } catch (error) {
        
    }
    
})




app.listen(7878,()=>{
    console.log(chalk.yellowBright("app is running at port 7878"))
})