import { Schema } from "mongoose";
import mongoose from "mongoose";
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  quantity: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
