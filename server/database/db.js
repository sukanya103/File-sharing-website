import mongoose from "mongoose";

const DBConnection = () =>{
    const MONGODB_URL='mongodb+srv://sukanya:SUKANYAkm10@cluster0.iv0us.mongodb.net/link'
    try{
        mongoose.connect(MONGODB_URL,{useNewUrlParser: true});
        console.log("Database conected successfuly ")
    }catch (error){
        console.log('error while conncting with the databse', error.message);
    }
}

export default DBConnection;