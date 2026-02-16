const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const dbcon = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo connnnn");
        
    } catch (error) {
        console.log("mongo is not connn",error.message);
        process.exit(1);
    }
}
module.exports = dbcon;
dbcon();