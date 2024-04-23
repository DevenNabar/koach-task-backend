import { Router } from "express";
import bookController from "../controllers/book.controller.js";

const router = Router();

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBookById);

router.post("/", bookController.createBook);

router.put("/", bookController.updateBook);

router.delete("/:id", bookController.deleteBook);

export default router;
