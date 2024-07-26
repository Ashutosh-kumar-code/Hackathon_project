import mongoose from "mongoose";

const studentSchema =  new mongoose.Schema({
    firstname: String,
    lastname : String,
    email:String,
    education: String,
    skills : String,
    password: String,
    country: String,
    date: { type : Date, default : Date.now}
});

//  module.exports = mongoose.model('Student',studentSchema);
 export default mongoose.model('Student',studentSchema);