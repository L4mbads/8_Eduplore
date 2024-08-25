import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import setCorsHeader from "./utils/cors-header.js"

const PORT = process.env.PORT || 5050;
const app = express();



app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use("/user-management/users", userRoutes);
app.use("/auth", authRoutes);
app.use(cookieParser());
// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});