const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute.js')
const campsitesRoute = require('./routes/campsitesRoute.js')
const usersRoute = require('./routes/usersRoute.js')
const app = express();

dotenv.config();


const connect = async () => {
    
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.DATABASE);
        console.log('CONNECTED TO MONGODB');
      } catch (error) {
        throw(error);
      }
}



//middlewares

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/campsites", campsitesRoute)
app.use("/api/users", usersRoute)




app.listen(8800, ()=>{
    connect();
    console.log('connected to backend');
})