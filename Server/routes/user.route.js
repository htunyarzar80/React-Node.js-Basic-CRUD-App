import  express from 'express'
import { getUsers, createUser, getUser,deleteUser,updateUser } from '../controllers/user.controller.js'

 const router = express.Router();

router.get("/users",getUsers);
router.post("/user/create",createUser);
router.get("/user/:id",getUser);
router.delete("/user/:id",deleteUser);
router.put("/user/:id",updateUser);

export default router