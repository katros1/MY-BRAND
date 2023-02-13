import mongoose from "mongoose";


const mongoConnect = async () => {
    await   mongoose.connect("mongodb+srv://Katros:babu02@cluster0.z4lsky9.mongodb.net/test")

}

const mongoDisconnect = async () => {
    await   mongoose.disconnect();

}

export {mongoConnect, mongoDisconnect};