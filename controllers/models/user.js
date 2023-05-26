import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{ 
        type: String,
    required:"content is required"
},

password: {
    type:String,
    required:false
},

email:{
    type:String,
    required:false
}

})
export default mongoose.model('user', userSchema)