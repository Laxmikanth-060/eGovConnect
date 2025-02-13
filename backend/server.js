import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import serviceRoutes from "./routes/service.routes.js"
import fileRoutes from "./routes/file.routes.js"
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 1234;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    cors({
      origin: "https://egovconnectbackend.onrender.com",
      credentials: true,
    })
  );
  
  app.use((req, res, next) => {
    res.cookie("cookieName", "cookieValue", {
      httpOnly: true,
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    });
    next();
  });


  app.use("/api/auth", authRoutes);
  app.use("/services",serviceRoutes);
  app.use("/api/file",fileRoutes);


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}!`);
    connectMongoDB();
  });
  