
import express from "express";

import { login, logout } from "../controllers/auth-controller.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all possible users.
router.post("/login", login);

router.post("/logout", logout)

export default router;
