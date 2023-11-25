import express from "express"
import { getUsers, getUserById, addUser, updateUser, deleteUser } from "../controllers/userController.js"

const router = express.Router()

router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.post('/user', addUser)
router.delete('/user/:id', deleteUser)
router.patch('/user/:id', updateUser)


export default router;