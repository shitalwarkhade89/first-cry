import User from "../models/user.js";

const apiUserSingup = async (req,res) => {
    const {name,email,password,mobile,gender}=req.body


    const user = await User({
        name,
        email,
        password,
        mobile,
        gender
    })

    const newUser = await user.save();
     try{
        res.json({
           sussccess:true,
           data:newUser,
           message:"Create user successfully!",
        })
     }
     catch(err){
        res.json({
            sussccess:false,
            message:err.message
        })
     }

     

}

export {apiUserSingup}

