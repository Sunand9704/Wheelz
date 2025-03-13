require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./mainbase.js");
const Cars = require("../models/print.js");

const db ="mongodb+srv://vb5331264:OCvl1Sr5fkRz3GLx@cars.kvrno.mongodb.net/?retryWrites=true&w=majority&appName=Cars";

    main().then((res)=>
    {
      console.log(res);
      
    }).catch(err => console.log(err));

    async function main() {
      await mongoose.connect(db);
    
      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }


const DB = async() =>
{
    await Cars.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:'67d30c6fb86b09093b736acb'}));
    await Cars.insertMany(initData.data);
    console.log("data saved sucessfully");
};

DB().then(res=>console.log(res)
).catch(err=>{console.log(err);
});