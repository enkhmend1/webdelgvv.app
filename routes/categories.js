const express = require("express");
const {
  getcategories,
  getcategory,
  createcategory,
  updatecategory,
  deletecategory,
} = require("../controller/categories");
const router = express.Router();
router.route("/").get(getcategories).post(createcategory);
router
  .route("/:id")
  .get(getcategory)
  .put(updatecategory)
  .delete(deletecategory);

module.exports = router;
