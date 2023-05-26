import { Express } from "express";
import bodyParser from "body-parser";
import { getUser, createUser, updateUser } from "../../controllers/user.js";
import userSchema from "../../controllers/models/user.js";

const router = Express.router();

//user getting

router.get("/",async(req,res)=>{
    try {
        const response= await userSchema.find();
        res.json(response);
    }catch(err){
        res.send("error" +err); 
    }
});

//only one getting 

router.get("/:id", async (req, res) => {
    try {
      const response = await userSchema.findById(req.params.id);
      res.json(response);
    } catch (err) {
      res.send("error" + err);
    }
    req.params.id;
  });

  //creating one user
  
  router.post("/", async (req, res) => {
    const data = req.body;
  
    try {
      const savedUser = await userSchema.findOne({ email: data.email });
      if (savedUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      }
      const response = new userSchema({
        name: data.name,
        email: data.email,
        password: data.password,
        userId: data.userId,
      });
      const user = await response.save();
      res.json({
        message: "User created successfully",
  
        data: user,
      });
    } catch (err) {
      res.send([{ message: "error occured " }, err]);
    }
  });

export default router