import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';

// const jwtKey = 'e-comm';
// import './db/config.js'
import { loginStudent, registerStudent, } from './controller/studentController.js';
import { getProfessionalList, loginProfessional, registerProfessional, searchProfessionalList } from './controller/professionalController.js';
// import Students from './models/studentModel.js';
import professionalModel from './models/professionalModel.js';
import connection from './db/config.js';
import { filterProjectList, getProjectList, uploadProject } from './controller/projectController.js';

const app = express();

app.use(express.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send({
        message: "Welcome"
    })
})

// Students
app.post("/register-student", registerStudent );
app.post("/login-student", loginStudent );

//  Professional
app.post("/register-professional", registerProfessional );
app.post("/login-professional", loginProfessional );
app.get("/professional-list", getProfessionalList );
app.post("/professional-filter", searchProfessionalList );

//  Projects
app.post("/upload-project", uploadProject );
app.get("/projects-list", getProjectList );
app.post("/filter-projects", filterProjectList );

connection();


app.listen(8080,()=>{console.log("Server started ..")});