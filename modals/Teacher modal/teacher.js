const mongoose=require("mongoose")

const teac_sch=mongoose.Schema({
    username:String,
    password:String,
    TeacherId:String,
    building:String,
    course:String,
    branch:String,
    subTeach:String
})

const tech_sch=mongoose.model("TeacherLogin",teac_sch)

module.exports=tech_sch;