const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Users = new Schema({
    name: { type: String },
    email: { type: Number },
    password: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = {
    Users: mongoose.model('Users', Users)
}