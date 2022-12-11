const {Router}=require("express");
const { UserModel } = require("../Models/User.model");

const adminController=Router();

adminController.post("/adminLogin", async(req,res)=>{
    try{

        const {email,password}=req.body;
        const user= await UserModel.find({email});
        const hash=user.password;
        bcrypt.campare(password,hash,function(err,result){
            if(err){
                res.send({message:"Something went wrong, please try again later"})
            }
            if(result && user.role==="admin"){
                var token =jwt.sign({userId:user._id, email:email},process.env.SECRET_KEY);
                res.send({message:"Login Successfull", token});

            }else{
                res.send({message:"Invalid Credentials"})
            }
        })
    }catch(err){
        console.log("err");
        res.send("Invalid Credentials")
    }

})




module.exports={adminController}