import { Schema, model } from "mongoose";

const userSchema = new Schema ({

    name:{
        type: String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        required:true,
        enum:['Male' ,'Femlae','Other'],
    }
})
const User = model ('User', userSchema);

export default User
