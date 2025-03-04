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
        }
            req.flash("success", "Welcome to Wheelzz");
            res.redirect("/carlistings");
    });
    }
    catch(err)
    {
        req.flash("erro", err.message);
        res.redirect("/signup");
    };

}));
module.exports = router;

