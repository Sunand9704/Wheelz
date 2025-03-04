const joi = require("joi");
const Vechile = require("./models/print.js");
const Review = require("./models/reviews.js");

const vechileSchema = joi.object({
    listing:joi.object({
        title : joi.string().required(),
        description : joi.string().required(),
        price:joi.number().required().min(0),
        image : joi.string().allow("",null),
    }).required(),
});


const reviewSchema = joi.object({
    review: joi.object({
        comment:joi.string().required(),
        rating:joi.string().required().min(1).max(5),
    }).required(),
});


module.exports= {vechileSchema, reviewSchema};

