import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import senderRoutes from "./routes/sender-routes.js";
import beasiswaRoutes from "./routes/beasiswa-routes.js";

const PORT = process.env.PORT || 5050;
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://eduplore.vercel.app",
    ];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
};

// Updated CORS configuration
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Add OPTIONS handling for preflight requests
app.options("*", cors(corsOptions));

// Favicon handler
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Eduplore API");
});

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

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
