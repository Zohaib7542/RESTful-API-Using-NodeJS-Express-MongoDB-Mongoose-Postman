const mongoose = require("mongoose");


//creating schema
const menSchema = new mongoose.Schema({
    ranking : {
        type:Number,
        require : true,
        unique : true
    },
    name : {
        type: String,
        require : true,
        trim : true

    },
    dob:{
        type:String,
        require : true,
        trim : true
    },
    country:{
        type : String,
        require : true,
        trim : true
    },
    score:{
        type : Number,
        require : true,
        trim : true
    },
    event : {
        type : String,
        default : "100m"
       
    },
})

//creating a new collection
const  MensRanking = new mongoose.model("MenRanking",menSchema);

module.exports = MensRanking;