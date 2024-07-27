import mongoose from "mongoose";

const projectSchema =  new mongoose.Schema({
    name: String,  
    description: String,
    skills : String,
    what_helowant: String,
    personal: String,
    date: { type : Date, default : Date.now}
});


 export default mongoose.model('Projects',projectSchema);