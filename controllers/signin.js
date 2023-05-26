import bcrypt from "bcrypt"
import userSchema from "./models/userModel.js";
const signin= async(req,res)=>{
    try{
        let data=req.body
        let checkEmail=await userSchema.findOne({email:data.email})
        if(checkEmail){
          let compare=await bcrypt.compare(data.password,checkEmail.password)
       
          if(compare==true){
            res.status(200).json({
                message:"login successfully"
            })
          }
          else{
            res.status(500).json({
                message:"enter correct password"

            })
          }
        }

        else{
            res.status(409).json({
                message:"go back to sign up"

            })
        }
    }
    catch(error){
     res.status(500).json({
        error:"failed to process data",
        error:"failed"
     })
    }

}

export default signin