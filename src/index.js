const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();


const server = require('http').Server(app);
const io = require('socket.io')(server,{
    cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
}

});

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@goweek-backend.0toen.mongodb.net/goweek?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});


app.use((req, res, next)=>{
    req.io = io;

    return next();
});



app.use(cors());
app.use(express.json());
app.use(require('./routes'));


server.listen(3001)
