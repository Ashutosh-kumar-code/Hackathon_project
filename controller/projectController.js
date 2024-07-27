import Projects from "../models/projectModel.js";


export const uploadProject = async (req,res)=>{
    let project = new Projects(req.body);
    let result = await project.save();

        if(result){
            res.send({result});
        }else{
            res.send({result: "something went wrong"})
        }
      
}

export const getProjectList = async (req,res)=>{
    Projects.find()
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
}

export const filterProjectList = async (req,res)=>{
    let result = await Projects.find({
        "$or":[
            {skills:{$regex: req.params.key}},
            // {country:{$regex: req.params.key}}
           
        ]
    })
    res.send(result);
}