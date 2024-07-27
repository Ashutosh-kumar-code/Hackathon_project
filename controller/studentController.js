import Student from "../models/studentModel.js";
import jwt from "jsonwebtoken";
const jwtKey = 'e-comm';



export const registerStudent = async (req,res)=>{
    let user = new Student(req.body);
    let result = await user.save();
    result =  result.toObject();
    delete result.password;
    jwt.sign({result},jwtKey,{expiresIn: "2h"},(err,token)=>{
        if(err){
            res.send({result: "something went wrong"})
        }
        res.send({result,auth: token});
    })
}

export const loginStudent = async (req,res )=>{
    if(req.body.email && req.body.password){
            
        let user = await Student.findOne(req.body).select("-password");
        
        if(user){
          jwt.sign({user},jwtKey,{expiresIn: "2h"},(err,token)=>{
                if(err){
                    res.send({result: "something went wrong"})
                }
                res.send({user,auth: token});
            })
        }else{
            res.send({ message: "No user Found" })
        }
    }else{
        res.send({message: "Fill the data properly" })
    }
    
}




