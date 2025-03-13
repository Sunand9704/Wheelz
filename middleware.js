const Vechile = require("./models/print.js");
const Review = require("./models/reviews.js");


module.exports.isloggedin = (req,res,next) =>
{
    if(!req.isAuthenticated())
    {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in Carz");
        return res.redirect("/login");
    }
    next();
};

module.exports.savedredirectUrl = (req,res,next) =>
{
    if(req.session.redirectUrl)
    {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isowner= async(req,res,next) =>
{
    let {id} = req.params;
    let listing = await Vechile.findById(id);
    if(!listing.owner.equals(res.locals.currenuser._id))
    {
        req.flash("error", "You are not owner of the listing");
        return res.redirect(`/cars/${id}`);
    };
    next();
};

module.exports.isauthor = async (req,res,next) =>
{
    let {reviewid,id}=req.params;
    let review = await Review.findByIdAndUpdate(reviewid);
    
    if(!review.author._id.equals(res.locals.currenuser._id))
    {
        req.flash("error", "you are not the owner of the review");
        return res.redirect(`/cars/${id}`);
    };
    next();
}; 

