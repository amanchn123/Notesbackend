const bcrypt=require('bcryptjs');
const tech_sch=require('../modals/Teacher modal/teacher');


const Login=async(req,resp)=>{
   const {username,password}=req.body;
    
   try{
     const response=await tech_sch.findOne({username:username})
     
     const comparePass=await bcrypt.compare(password,response.password)
     if(comparePass){
      
        resp.json({response,success:true})
     }else{
        resp.json("not")
     }
     
   }catch (error){
    console.log(error)
   }
}

const Signup=async(req,resp)=>{
   const {username,password,building,course,branch,sub,TeacherId}=req.body;
   
   try{
    
      const salt=await bcrypt.genSalt(10)
      var hashPassword =await bcrypt.hashSync(password, salt);
      const findd=await tech_sch.findOne({username,TeacherId})
      if(findd){
         resp.json("alredy")
      }else{
         const response=await new tech_sch({...req.body,password:hashPassword})
         await response.save()

         resp.json({success:true})
      }

   }catch (error){
      console.log(error)
   }
}

module.exports={Login,Signup}
