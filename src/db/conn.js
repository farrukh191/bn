const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successfull");
}).catch((e) => {
    console.log("no connection");
})

// create connection with mongo db