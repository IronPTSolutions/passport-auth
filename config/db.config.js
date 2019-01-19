const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/basic-auth'

mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
    .catch(error => console.error(`An error ocurred trying to connect to the databse ${MONGODB_URI}`, error))