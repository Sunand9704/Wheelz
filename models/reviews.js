const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Vechile = require("./print.js");
const carsSchema = require("../schema.js");
const { ref } = require("joi");

const reviewSchema= new Schema({
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
      type:Date,
      default:Date.now(),  
    },
    author:
    {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;