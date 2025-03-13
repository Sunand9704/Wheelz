const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");
const carsSchema = new Schema({
    title:
    {
        type:String,
    },
    description:
    {
        type:String,
    },
    image:
    {
        url:String,
        path:String,
    },
    price:
    {
        type:Number,
    },
    reviews:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:"Review",
        },
      ],
    owner :
    {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    
});

carsSchema.post("findOneAndDelete", async(listning) =>
    {
        if(listning)
        {
            await Review.deleteMany({_id : { $in :listning.reviews }});
        }
    });

const Vechile= mongoose.model("Vechile",carsSchema);


module.exports=Vechile;