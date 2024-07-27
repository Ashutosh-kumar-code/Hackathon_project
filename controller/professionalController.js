import Professional from "../models/professionalModel.js";
import jwt from "jsonwebtoken";
const jwtKey = 'e-comm';

export const registerProfessional = async (req,res)=>{
    let user = new Professional(req.body);
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

export const loginProfessional = async (req,res )=>{
    if(req.body.email && req.body.password){
            
        let user = await Professional.findOne(req.body).select("-password");
        
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




export const getProfessionalList = async (req,res)=>{
    Professional.find()
    .then(result => {
        res.json({
            result
        })
    })
    .catch(err => {
        res.json({
            err
        })
    })
    
    // delete result.password;
     
}


export const searchProfessionalList = async (req,res)=>{
    let result = await Professional.find({
        "$or":[
            {skills:{$regex: req.params.key}},
            {country:{$regex: req.params.key}}
           
        ]
    })
    res.send(result);
}