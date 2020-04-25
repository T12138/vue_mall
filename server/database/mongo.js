module.exports = (app) => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/game',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected',()=>{
        console.log('mongodb connected');
    })
}