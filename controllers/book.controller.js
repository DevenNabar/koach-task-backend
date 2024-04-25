import Book from "../models/book.model.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  const { title, author, description, quantity } = req.body;
  if (!title || !author || !description || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newBook = new Book({ title, author, description, quantity });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  const { id, title, author, description, quantity } = req.body;
  if (!id || !title || !author || !description || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, description, quantity },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book successfully deleted", book: deletedBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { getAllBooks, getBookById, createBook, updateBook, deleteBook };
