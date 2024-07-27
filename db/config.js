import mongoose from "mongoose";



const url = "mongodb+srv://ak0827kumar:xwtubTg1bA1spVwM@cluster-hackathon.ldmlizk.mongodb.net/?retryWrites=true&w=majority&appName=cluster-hackathon";

const connection = async ()=>{

    await mongoose.connect(url , 
        {
       useNewUrlParser: true,
       useUnifiedTopology: true
   }, console.log("database connected successfully ....")
)
   }
   
   // || 'mongodb://localhost:27017'

// const connection = async ()=>{

//     await mongoose.connect("mongodb://127.0.0.1:27017/receipeFounder", {
//        useNewUrlParser: true,
//        useUnifiedTopology: true
//    }, console.log("database connected successfully ...."))
//    }
   
   
   export default connection ;

//    export default connection ;