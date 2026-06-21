import express from "express";
import { createFood } from "../controller/food.controller.js";
import upload from "../middleware/upload.js"
 const foodRoutes = express.Router();

 foodRoutes.post("/create-food",upload.single("image"), createFood);
 export default foodRoutes