require('dotenv').config()
const mongoose = require('mongoose');
const mongodbUrl = process.env.MONGODB_URI;

const connection = mongoose.createConnection(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true  });
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Users = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    username: {type: String},
    date: { type: Date, default: Date.now }
});

module.exports = {
    Users: connection.model('Users', Users)
}