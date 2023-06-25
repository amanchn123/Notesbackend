const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');

const connection=async()=>{
  
    try{

      const connect=await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
   
      // const db =await client.db("BCA");
      console.log("connected")
    }catch{
      console.log("unable to connect")
    }
}

module.exports=connection;
