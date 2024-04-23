import express from "express";
import cors from "cors";
import mongoose, { connect } from "mongoose";
import bookRoutes from "./routes/book.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectToMongodb() {
  try {
    await mongoose.connect(
      "mongodb+srv://root:FVVkCcAKVFSJuABL@books.r48iimr.mongodb.net/books?retryWrites=true&w=majority&appName=Books"
    );
    console.log("Successfully connected to MongoDB");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
}

app.use("/api/books", bookRoutes);
connectToMongodb();
