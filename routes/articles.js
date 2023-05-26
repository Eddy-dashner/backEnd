import bodyParser from "body-parser";
import express from "express";
import {createArticle, moreArticles, readArticle} from '../controllers/articles.js'
import { createNames, deleteNames } from "../controllers/names.js";
import user from "../controllers/user.js"

const router =express.Router();
router.use(bodyParser.json())

router.post("/save", createArticle)
router.get("/eddy",readArticle)
router.get("/more",moreArticles)
router.post("/names/:name",createNames)
router.delete("/names",deleteNames)
router.put("/names",createNames)
router.post("/user",user)

export default router;