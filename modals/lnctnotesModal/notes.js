const mongoose=require("mongoose")

const notes_sch=mongoose.Schema({
    building:{type:String,default:""},
    course:String,
    note:String,
    branch:String,
    sec:String,
    sem:String,
    sub:String,
    unit:String,
})

const Note_modal=mongoose.model("Notes",notes_sch)

module.exports=Note_modal;