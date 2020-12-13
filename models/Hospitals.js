const mongoose=require('mongoose')


const HospitalSchema=new mongoose.Schema(
    {
        Name:
        {
            type:String,
            required:true
        },
        Address:
        {
            type:String,
            required:true
        },
        Crowd:
        {
            type:String,
            required:true
        },
        Cost:
        {
            type:String,
            required:true
            
        }
    }
)

module.exports=mongoose.model('Hospital',HospitalSchema)