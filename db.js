const mongoose = require('mongoose')


module.exports = () => {
    const connectParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        mongoose.connect(process.env.DB, connectParams)
        console.log('Successfully connected');
    } catch (error) {
        console.log(error)
        console.log('Error');
    }
}