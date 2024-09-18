
import mongoose from "mongoose";
 
export default async function conectDb(){
        mongoose.connect("mongodb+srv://mirandamduartte:mateus24@cluster0.d8qdh.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

        return mongoose.connection
}
 