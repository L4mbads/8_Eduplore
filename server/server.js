import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import senderRoutes from "./routes/sender-routes.js";
import beasiswaRoutes from "./routes/beasiswa-routes.js";


const PORT = process.env.PORT || 5050;
const app = express();



app.use(cors({
    origin: ['http://localhost:5173', 'https://eduplore-client.vercel.app/'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/user-management", userRoutes);
app.use("/beasiswa-management/beasiswa", beasiswaRoutes);
app.use("/auth", authRoutes);
app.use("/email-sender", senderRoutes);
// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});