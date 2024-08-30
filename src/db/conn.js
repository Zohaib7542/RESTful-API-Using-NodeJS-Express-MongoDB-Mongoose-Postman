const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics")
.then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log("No Connection");
})


// mongoose.connect("mongodb://localhost:27017/students-api")
// .then(()=>console.log("connection successful"))
// .catch((err)=>console.log(err));