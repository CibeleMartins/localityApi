import mongoose from "mongoose";

const LocalitysSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    
})

const localitys = mongoose.model("localitys", LocalitysSchema)

export default localitys;