import mongoose from "mongoose"

const articleSchema= new mongoose.Schema({
    title:{ 
        type: String,
    required:"content is required"
},

author: {
    type:String,
    required:false
},

Image:{
    type:String,
    required:false
},

content:{
    type:String,
    required:'Content is required'
}

})




export default mongoose.model('articles', articleSchema)