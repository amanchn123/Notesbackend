const sch=require('../modals/lnctnotesModal/notes')



const NotesCreate=async(req,resp)=>{
  console.log(req.body)
  try{
    const response=await new sch(req.body)
    await response.save()
    resp.json(response)
  }catch (error){
    console.log(error)
  }
}


const getNotes=async(req,resp)=>{
  const {building,course,branch,sec,sub,sem}=req.body;
  console.log(req.body)

  try{
    const response=await sch.find({building,course,branch,sec,sub,sem}).sort({unit:1})
    resp.json(response)
  }catch{

  }
}

module.exports={NotesCreate,getNotes}