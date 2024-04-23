import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import bookRoutes from "./routes/book.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectToMongodb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
}

app.use("/api/books", bookRoutes);
connectToMongodb();
