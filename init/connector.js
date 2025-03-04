const mongoose = require("mongoose");
const initData = require("./mainbase.js");
const Cars = require("../models/print.js");


// main().then(() => 
//     {
//        console.log("connection is sucesssful")
//     })
//     .catch(err => console.log(err));
    
//     async function main() {
//       await mongoose.connect('mongodb://127.0.0.1:27017/Wheelz');
//     };


    main().then((res)=>
    {
      console.log(res);
      
    }).catch(err => console.log(err));

    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/cars');
    
      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }


const DB = async() =>
{
    await Cars.deleteMany({});
    await Cars.insertMany(initData.data);
    console.log("dsta saved sucessfully");
};

DB().then(res=>console.log(res)
).catch(err=>{console.log(err);
});