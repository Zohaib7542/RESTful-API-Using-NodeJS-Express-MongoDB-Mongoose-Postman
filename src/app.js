const express = require("express");
const app = express();
require("../src/db/conn");
const MenRanking = require("../src/models/mens");
const port = process.env.PORT || 3000;

app.use(express.json());

// POST -----------------------------------------------------
app.post("/mens", async (req,res)=>{
    try{
        const addMenRanking = new MenRanking(req.body);
        console.log(req.body);
        const insertData = await addMenRanking.save();
        res.status(201).send(insertData);

    }catch(e){
        res.status(400).send(e);
    }

})

//GET---------------------------------------------------------
app.get("/mens", async (req,res)=>{
    try{
        const getMen = await MenRanking.find({}).sort({"ranking":1});
        res.status(201).send(getMen);

    }catch(e){
        res.status(400).send(e);
    }

})
//GET single id/names/other --------------------------------------
app.get("/mens/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const getMens = await MenRanking.findById(_id);
        res.status(201).send(getMens);

    }catch(e){
        res.status(400).send(e);
    }

})

//PATCH------------------------------------------------------
app.patch("/mens/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const getMens = await MenRanking.findByIdAndUpdate(_id,req.body);
        res.status(201).send(getMens);

    }catch(e){
        res.status(500).send(e);
    }

})
// delete ---------------------------------------------------------------

app.delete("/mens/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const getMens = await MenRanking.findByIdAndDelete(_id);
        res.status(201).send(getMens);

    }catch(e){
        res.status(500).send(e);
    }

})


app.listen(port,()=>{
    console.log(`connected ${port}`);
})