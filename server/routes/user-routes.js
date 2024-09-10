
import express from "express";

// This will help us connect to the database
import bcrypt from "bcrypt";

// This help convert the id from string to ObjectId for the _id.



import { insertUser, getUsers, getUserById, editUser, getMentors } from "../controllers/user-controller.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all possible users.
router.get("/user", getUsers);

router.get("/mentor", getMentors);

// This section will help you create a new record.
router.post("/user", insertUser);

router.get("/user/:id", getUserById);

// This section will help you update a record by id.
router.patch("/user/:id", editUser);



export default router;