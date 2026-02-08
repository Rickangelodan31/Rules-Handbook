const router = require("express").Router();


const bookRoutes = require("./Book.routes");
router.use("/books", bookRoutes);


exports = router;