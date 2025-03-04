const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Vechile = require("./print.js");
const carsSchema = require("../schema.js");

const reviewSchema= new schema({
    comment:
    {
        type:String,
    },
    rating:
    {
    type:Number,
    },
    createdAt:
    {
      type:String,
      default:Date.now(),  
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;