//Require mongoose
const mongoose = require('mongoose') ;

//Function connect to db 
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Connected To Database.')
    } catch (error) {
        console.log(error)
    }
}


//Export fn connect
module.exports = connect ;