const express=require("express")
const router=express.Router()
const { NotesCreate,getNotes}=require("../controller/Notes")

router.post('/notes',NotesCreate)
router.post('/getnotes',getNotes)


module.exports=router;