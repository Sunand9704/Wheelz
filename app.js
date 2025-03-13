if(process.env.NODE_ENV != "production")
{
  require('dotenv').config();
};
const express = require("express");
const mongoose = require("mongoose");
const Vechile = require("./models/print.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/reviews.js");
const MongoStore = require('connect-mongo');

const app =express();
const multer = require('multer');
const ejsmate = require("ejs-mate");
const methodoverride = require("method-override");
const port = 8080;
const path = require("path");
app.set("views engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/public")));
app.engine('ejs', ejsmate);
app.use(methodoverride("_method"));

//from sessions

const User = require("./models/user.js");
const flash = require("connect-flash");
const passport = require("passport");
const Localstratergy = require("passport-local");
const sessions = require("express-session");

const dburl = process.env.ATLAS_DB_URL;

    main().then((res)=>
    {
      console.log("data base connected sucessfully");
      
    }).catch(err => console.log(err));

    async function main() {
      await mongoose.connect(dburl);    
    }



    const store = MongoStore.create({
      mongoUrl : dburl,
      crypto:
      {
          secret:process.env.SECRET,
      },
      touchAfter:24*3600,
  });
  
  store.on("error", () =>
  {
      console.log("ERROR ON MONGO SESSION STORE", err);
  });

const sessionopt =
{
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized :true,
  Cookie :
  {
    expires: Date.now()+ 7 * 24 *60 *60 *1000,
    maxAge :  7 * 24 *60 *60 *1000,
    httpOnly : true,
  },
}
app.use(sessions(sessionopt));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use((req,res,next) =>
  {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currenuser = req.user;
    next();
  });
  


const carlis = require("./routes/carlistings.js");
const revi = require("./routes/reviews.js");
const userlis = require("./routes/user.js");


app.use("/cars",carlis);
app.use("/cars/:id/reviews", revi);
app.use("/",userlis);



app.get("/", (req,res)=>
{
   res.redirect("/carlistings");
});




app.all("*", (req,res,next) =>
{
    next(new ExpressError(404, "page not found"));
});

app.use((err,req,res,next)=>
{
    let {statusCode = 500,message = "something went wrong"} = err;
    res.render("error.ejs",{message});
});

app.listen(port, () =>
{
    console.log("server started",port);
    
});