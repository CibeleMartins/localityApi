import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(`mongodb+srv://cibelee:223366@cluster0.ydv7g.mongodb.net/?retryWrites=true&w=majority`)

let db = mongoose.connection;

export default db;