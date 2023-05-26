import  express from "express";
import bodyParser from "body-parser";
import  signIn from "../controllers/signin.js";


const router = express.Router();
router.use(bodyParser.json())
router.post("/signin",signIn)
export default router