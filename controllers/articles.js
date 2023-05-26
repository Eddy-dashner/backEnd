import articleSchema from './models/artModel.js'

const createArticle = async(req,res)=>{
    let body= req.body
    try{
        const articleInstance = new articleSchema({
        title: body.title,
        author: body.author,
        image: body.image,
        content:body.content

        })
        let response = await articleInstance.save();
        res.status(200).json({
            message:'Data sent successfully',
            data: response,
            error:null,
        }) 
    }catch(error){
        res.status(500).json({
            message:'Error occured',
            data: null,
            error:error,
        })
    }   
}

const readArticle =(req,res)=>{
    res.send("this is the read article controller ")
}

const moreArticles =(req,res)=>{
    

    res.send("this is a new article")}

export {createArticle, readArticle,moreArticles}