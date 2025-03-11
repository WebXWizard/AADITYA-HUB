const mongoose = require('mongoose');
const url ="mongodb+srv://aadityaacomputer9:Bhanu1234@cluster0.7qibq.mongodb.net/Database?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;
