const mongoose = require("mongoose")
const connectDatabase = () => { 

    mongoose.connect(process.env.MONGO_URI ).then( (con) => {
        console.log('mongeDB connected to host:' +con.connection.host )
    })
}  ;

module.exports = connectDatabase ;