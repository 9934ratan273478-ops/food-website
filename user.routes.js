import express from "express";
import { registerUser } from "../controller/user.controller.js";

const UserRouter = express.Router();



UserRouter.post("/register", registerUser);

export default UserRouter;