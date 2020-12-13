const express=require("express")
const router=express.Router()
const {ensureAuth,ensureGuest}=require("../middleware/auth")
const Hospitals = require("../models/Hospitals")
const Hospital=require("../models/Hospitals")
const bodyParser = require('body-parser');


router.post("/add",ensureAuth,async (req,res) =>
{
    //const hospitals = await Hospitals.find().lean()
    //res.render("dashboard",{name: req.user.firstName,
    //hospitals})
    console.log("rudy post")
})

module.exports=router