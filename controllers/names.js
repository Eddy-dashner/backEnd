const createNames=(req,res)=>{
    const name=req.params.name
    res.send(name)
}

const deleteNames=(req,res)=>{
    const dash=req.query.dash
    res.send(dash)
}

export {createNames, deleteNames}