const express = require("express");
const router = express.Router({mergeParams:true});
const Review = require("../models/reviews.js");
const Vechile = require("../models/print.js");
const {reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapasync = require("../utils/wrapasync.js");
const {isauthor,isloggedin}= require("../middleware.js");

const validatereview = (req,res,next) =>
    {
        let {error} = reviewSchema.validate(req.body);
        if(error)
        {
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(400,errMsg);
        }
        else
        {
            next();
        };
    };

////reivews create route
router.post("/", validatereview,isloggedin,wrapasync(async(req,res)=>
    {
        const id= req.params.id;
        let car  = await Vechile.findById(id); 
        let newreview =new Review(req.body.review);
        newreview.author = req.user.id;
        car.reviews.push(newreview);
        await newreview.save();
        await car.save();
      console.log("REview going to save");
      req.flash("success", "Review Added");
      res.redirect(`/cars/${car._id}`);
    }));

//delte route for reviews
router.delete("/:reviewid",isloggedin,isauthor, wrapasync(async(req,res)=>
{
    let {id, reviewid} = req.params;
    await Vechile.findByIdAndUpdate(id, {$pull :{reviews:reviewid}});
    await Review.findByIdAndDelete(reviewid);
    req.flash("success", "Review Deleted");
    res.redirect(`/cars/${id}`);
}));




module.exports = router;