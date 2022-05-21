import mongoose from "mongoose";

const LocalitysSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, require: true },
    latitude: { type: String, require: true },
    longitude: { type: String, require: true },
    
})

const localitys = mongoose.model("localitys", LocalitysSchema)

export default localitys;