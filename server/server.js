import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import senderRoutes from "./routes/sender-routes.js";
import beasiswaRoutes from "./routes/beasiswa-routes.js";

const PORT = process.env.PORT || 5050;
const app = express();

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://eduplore.vercel.app",
  "https://eduplore-api.vercel.app",
];

// Middleware to set CORS headers dynamically
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Preflight request handler for all routes
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

app.use(express.json());
app.use(cookieParser());

// Favicon handler
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Eduplore API");
});

// Routes
app.use("/user-management", userRoutes);
app.use("/beasiswa-management/beasiswa", beasiswaRoutes);
app.use("/auth", authRoutes);
app.use("/email-sender", senderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
