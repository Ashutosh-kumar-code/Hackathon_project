import mongoose from "mongoose";

const professionalSchema =  new mongoose.Schema({
    firstname: String,
    lastname : String,
    email:String,
    password: String,
    experience: String,
    skills : String,
    description: String,
    country: String,
    date: { type : Date, default : Date.now}
});


 export default mongoose.model('Professional',professionalSchema);