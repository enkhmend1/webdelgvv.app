const Category = require("../models/category");
const MyError = require("../utils/myerror");
const asyncHandler = require("../middleware/asyncHandler");

exports.getcategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.getcategory =asyncHandler( async (req, res, next) => {
  
    const category = await Category.findById(req.params.id);
    if (!category) {
      throw new MyError(req.params.id + `id baihgvi bainas`, 403);
    }
    res.status(200).json({
      succuss: true,
      data: category,
    });

});

exports.createcategory =asyncHandler( async (req, res, next) => {
  console.log("data:", req.body);
    const category = await Category.create(req.body);
    res.status(200).json({
      succuss: true,
      data: category,
    });
  
});
exports.updatecategory =asyncHandler( async (req, res, next) => {
  
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      throw new MyError(req.params.id + "id baihgvi bainassss", 400);
    }
    res.status(200).json({
      succuss: true,
      data: category,
    });
  
});
exports.deletecategory = asyncHandler( async (req, res, next) => {

    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      throw new MyError(req.params.id + "id baihgvi bainassss", 400);
    }
    res.status(200).json({
      succuss: true,
      data: category,
    });
  
});
