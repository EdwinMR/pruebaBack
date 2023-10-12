import * as bcrypt from 'bcrypt';
import mongoose, { Types, ObjectId } from "mongoose";

interface User{
    email:string,
    password: string,
    role: Types.ObjectId
}

interface Roles{
    name:string,
    _id: string
}

interface allData {
    users: User[],
    roles: Roles[]
}

export const initialData: allData ={
    users:[
        {
            email:"edwin@hotmail.com",
            role: new mongoose.Types.ObjectId("6527531028c0631b0e653b48"),
            password:bcrypt.hashSync( 'Password123!', 10 )
        },
        { 
            email: "edwin1@hotmail.com", 
            role: new mongoose.Types.ObjectId("6527531528c0631b0e653b49"),
            password: bcrypt.hashSync( 'Abc1234!', 10 ) 
        }
    ],
    roles:[
        {
            _id:"6527531028c0631b0e653b48",
            name:"Administrador"
        },
        {
            _id:"6527531528c0631b0e653b49",
            name:"Usuario"
        }
    ]
}