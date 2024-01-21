import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
 const app = express()
 app.use(express.json());
 try{
    const connectionDb = async () => {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
           if (conn) {
              console.log('MongoDB connected successfully 🎇');
           }
        };
        connectionDb()
}
catch(err){
   console.log(err.message)
}

const PORT =process.env.PORT ||5000
app.listen(PORT , () => {
    console.log(`server is running on Port ${PORT}`);

})