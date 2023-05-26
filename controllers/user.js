import userSchema from "./models/userModel.js";
import bcrypt from "bcrypt"

const createUser =async (req, res) => {
  try {
    const data=req.body;
    const salt=await bcrypt.genSalt(5);
    let hashedPassword=await bcrypt.hash(data.password,salt);
    data.password=hashedPassword;

    let check=await userSchema.findOne({email:data.email})
    if (check){
      res.status(409).json({
        message:"user already exist"
      })
    }
    else{ 
       let userInstance= new userSchema({
      name:data.name,
      password:data.password,
      email:data.email
      
      

    })
    let result=await userInstance.save()
    res.status(200).json({
      message:"data saved successfully",
      data:result
    })
  }}

   catch (error) {
    res.status(500).json({
      message:"data failed to save",
      error:"failed to save"
    })
  }
};


export default createUser ;

    
