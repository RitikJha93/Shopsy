const mongoose = require('mongoose')

const connectMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Database connection established'.cyan.bold);
    }).catch((err)=>{
        console.log(err.red.bold);
    })
}

module.exports = connectMongo