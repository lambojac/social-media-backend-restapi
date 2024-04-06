import  mongoose from "mongoose"
const db=async(req,res)=>{
try{
await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
console.log("connected to mongodb database successfully")
}catch(err){
console.log("error connecting to mongodb database")
}
}

export default db