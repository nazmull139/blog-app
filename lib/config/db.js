import mongoose from "mongoose";

export const ConnectDB = async ()=>{

    await mongoose.connect('mongodb://blogger:12345qwer@cluster0-shard-00-00.9qczx.mongodb.net:27017,cluster0-shard-00-01.9qczx.mongodb.net:27017,cluster0-shard-00-02.9qczx.mongodb.net:27017/blogApp?ssl=true&replicaSet=atlas-nsy9e6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');
    console.log("Db connected")
    


}