import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';

// const jwtKey = 'e-comm';
// import './db/config.js'
import { loginStudent, registerStudent, } from './controller/studentController.js';
import { loginProfessional, registerProfessional } from './controller/professionalController.js';
// import Students from './models/studentModel.js';
import professionalModel from './models/professionalModel.js';
import connection from './db/config.js';

const app = express();

app.use(express.json());
app.use(cors());




// Students
app.post("/register-student", registerStudent );
app.post("/login-student", loginStudent );

// Professional
app.post("/register-professional", registerProfessional );
app.post("/login-professional", loginProfessional );


//  const insertdata = async ()=>{
//   await  Students.create({
//         firstname : "Hanuman",
//         email : "hanuman@ram.com",
//     })
// }

// insertdata();

connection();

app.listen(5000,()=>{console.log("Server started ..")});