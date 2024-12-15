const mongoose = require('mongoos')

async function connectToMongoDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB
}