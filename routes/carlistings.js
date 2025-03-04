const express = require("express");
const router = express.Router();
const Vechile = require("../models/print.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapasync = require("../utils/wrapasync.js");
const {vechileSchema} = require("../schema.js");


const validatecars = (req,res,next) =>
    {
        let {error} = vechileSchema.validate(req.body);
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



//index route
router.get("/", wrapasync(async(req,res)=>
    {
        let data = await Vechile.find({});
        res.render("carlistings/index.ejs",{data});
    }));
    
    //new route
    router.get("/new", (req,res)=>
    {
        res.render("carlistings/new.ejs");
    });

    //create route
    router.post("/", wrapasync(async(req,res)=>
    {
        let newdata = await Vechile(req.body.carsdata);
        await newdata.save();
        console.log("new data saved");
        
        res.redirect("/cars");
    }));

    // show route
    router.get("/:id",  wrapasync(async(req,res) =>
    {
        let { id } =req.params;        
        let cardata = await Vechile.findById(id).populate("reviews");
        res.render("carlistings/show.ejs", {cardata});
    }));
    
    //edit route
    router.get("/:id/edit",  wrapasync(async(req,res) =>
    {
        let { id } = req.params;
        let cardata = await Vechile.findById(id);
        res.render("carlistings/edit.ejs",{cardata});
    }));
    
    //update route
    router.put("/:id",  wrapasync(async(req,res) =>
    {
        let {id} = req.params;
        let newdat = await Vechile.findByIdAndUpdate(id, {...req.body.carsdata});
        res.redirect(`/cars/${id}`);
    }));
    //delete route
    router.delete("/:id",  wrapasync(async(req,res)=>
    {
        let {id} =req.params;
        let resl = await Vechile.findByIdAndDelete(id);
        res.redirect("/cars");
    }));

module.exports = router;