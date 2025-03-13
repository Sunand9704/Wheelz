const express = require("express");
const router = express.Router();
const Vechile = require("../models/print.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapasync = require("../utils/wrapasync.js");
const {vechileSchema} = require("../schema.js");
const {isloggedin} = require("../middleware.js");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const {storage} = require("../cloudconfig.js");
const upload = multer({ storage });


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
    router.get("/new",isloggedin, (req,res)=>
    {
        res.render("carlistings/new.ejs");
    });

    //create route
    router.post("/",isloggedin, upload.single('carsdata[image]'), wrapasync(async(req,res)=>
    {
        let result = await cloudinary.uploader.upload(req.file.path);
        let newdata = new Vechile(req.body.carsdata);
        newdata.owner = req.user.id;
        newdata.image = { url:result.secure_url, filename:result.public_id };
        await newdata.save();
        console.log("new data saved");
        req.flash("success", "new Listing created");
        res.redirect("/cars");
    }));

    // show route
    router.get("/:id",  wrapasync(async(req,res) =>
    {
        let { id } =req.params;        
        let cardata = await Vechile.findById(id)
        .populate({
            path:"reviews", 
            populate:{
            path:"author",
        }
        }).populate("owner");
          console.log(cardata);
          console.log(cardata.image);
          

        res.render("carlistings/show.ejs", {cardata});
    }));
    
    //edit route
    router.get("/:id/edit",isloggedin, wrapasync(async(req,res) =>
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
    router.delete("/:id",isloggedin,  wrapasync(async(req,res)=>
    {
        let {id} =req.params;
        let resl = await Vechile.findByIdAndDelete(id);
        req.flash("success", "Deleted Successfully");
        res.redirect("/cars");
    }));

module.exports = router;