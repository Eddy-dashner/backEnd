import  express from "express";
import bodyParser from "body-parser";
import  createUser  from "../controllers/user.js";


const router = express.Router();
router.use(bodyParser.json())
router.post("/regiser",createUser)
export default router