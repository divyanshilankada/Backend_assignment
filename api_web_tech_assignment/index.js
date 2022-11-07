const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');



dotenv.config();

mongoose.connect("mongodb://localhost/api_web_tech_assignment");
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
});
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err);
});

app.listen(3000, () => console.log("Server is up on 3000"));