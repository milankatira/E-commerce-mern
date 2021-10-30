const express = require("express");

const app = express();

const dotenv=require("dotenv");

const router=require("./Routes/user");
dotenv.config();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/api/v1',(req,res)=>{console.log("hello")})

app.use(express.json());

app.use('/',router)

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000");
});
