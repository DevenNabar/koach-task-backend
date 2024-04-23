import { Schema } from "mongoose";
import mongoose from "mongoose";
const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
