const express=require("express")
const router=express.Router()
const {ensureAuth,ensureGuest}=require("../middleware/auth")
const Hospitals = require("../models/Hospitals")
const Hospital=require("../models/Hospitals")
const bodyParser = require('body-parser');



router.get("/",ensureGuest,(req,res) =>
{
    res.render("home")
})

router.get("/login",(req,res) =>
{
    res.render("login",{
        layout:'login'
    })
})
router.get("/dashboard",ensureAuth,async (req,res) =>
{
    if(req.user.googleId==103055754997787812413)
    {
        res.render('admin')
    }
    else
    {
        try {
            //const hospitals = await Hospitals.find().lean()
            res.render('dashboard', {
            name: req.user.firstName,pic:req.user.image
            
            })
            
        }catch(err)
        {
            console.error(err)
        }
    }
    
})
router.get("/find",ensureAuth,async (req,res) =>
{
    const hospitals = await Hospitals.find().lean()
    res.render("dashboardre",{name: req.user.firstName,
    hospitals,pic:req.user.image})
})
router.post("/add",ensureAuth,async (req,res) =>
{
    //const hospitals = await Hospitals.find().lean()
    //res.render("dashboard",{name: req.user.firstName,
    //hospitals})
    console.log("rudy post index")
    console.log(req.body.fname[1])
    const newHos = {
        Name: req.body.fname[0],
        Address: req.body.lname[0],
        Crowd: req.body.fname[1],
        Cost: req.body.lname[1],
        
      }
    user = await Hospital.create(newHos)
    //console.log(req.body)
})


module.exports=router








