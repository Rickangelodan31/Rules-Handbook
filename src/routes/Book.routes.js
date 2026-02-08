// routes/book.routes.js
const router = require("express").Router();
const Book = require("../models/Book.model");
const uploader = require("../middlewares/cloudinary.config");
const { isAuthenticated } = require("../middlewares/route-gaurd.middleware");

// Upload book file and save book info
router.post(
  "/upload",
  isAuthenticated,
  uploader.single("bookFile"),  // `bookFile` is the key for the file in the request form data
  async (req, res) => {
    try {
      const { title, author, description, coverImage } = req.body;

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const newBook = await Book.create({
        title,
        author,
        description,
        fileUrl: req.file.path, // Cloudinary file URL
        coverImage, // Optional
        uploadedBy: req.user._id, // comes from isAuthenticated middleware
      });

      res.status(201).json(newBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error uploading book" });
    }
  }
);

module.exports = router;
