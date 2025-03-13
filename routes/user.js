const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapasync.js");
const passport = require("passport");

router.get("/signup", (req,res)=>
{
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async(req,res)=>
{
    try
    {
   let {username,email,password} = req.body;
   let newuser = new User({username,email});
   let newregis =await User.register(newuser, password);
   console.log("register added");
   
   req.login(newregis, (error) =>
   {
        if(error)
        {
            return next(error);
        };
            req.flash("success", "Welcome to Wheelzz");
            res.redirect("/cars");
    });
    }
    catch(err)
    {
        req.flash("error", err.message);
        res.redirect("/signup");
    };

}));

router.get("/login", (req,res) =>
{
    res.render("users/login.ejs");
});

router.post("/login", passport.authenticate("local", {failureRedirect:"/login",failureFlash:true}), (req,res)=>
{
    req.flash("success", "Welcome Back to Wheelz");
    let redirect = res.locals.redirectUrl || "/cars";
    res.redirect(redirect);
});

router.get("/logout", (req,res,next) =>
{
    req.logout((error) =>
    {
        if(error)
        {
           return next(error);
        }
        req.flash("success", "you are Logged Out sucessfully");
        res.redirect("/cars");
    });
});






module.exports = router;

