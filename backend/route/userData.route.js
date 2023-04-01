const User = require('../model/userData.model');
const nodemailer = require("nodemailer");
const express = require('express');

const app = express.Router();

const transport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'advsaurabhsolanki@gmail.com',
    pass: '100.lanki@',
  }
});


//for getting all users
app.get("/", async (req, res) => {
  const search=req.query.search||""
  const cat=req.query.category || ""
  // console.log(cat)
  let data=""
  const query={
    name:{
      $regex:search,
      $options:"i"
    }
  }


  if(cat!="all"){
    query.category=cat
  }
  const{page=1,limit=12,orderBy="id",order="asc"}=req.query || ""

    try {
      let allUsers = await User.find(query)
      .sort({[orderBy]:order==="asc"?1:-1})
      .skip((page-1)*limit)
      .limit(limit)
       return res.send({ message: "signups", data: allUsers });
    } catch (e) {
      console.log(e);
      return res.status(404).send({ error: 'Something went wrong in getting all user' });
    }
  });


// for posting a user
app.post('/', async (req, res) => {
    try {
        const { name,city,phone,date} = req.body;
        const getuser = await User.findOne({ phone });
        if (getuser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ name,city, phone,date});
        console.log('user: ', user);

        return res.status(201).send({ message : 'User Registered Successfully...' });
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong...' });
    }
});



//   get Single User
app.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      let singleUser = await User.findById(id);
      return res.send({ message: "Single User ", data: singleUser });
    } catch (e) {
        return res.status(404).send({ error: 'Something went wrong in getting single user' });
    }
  });


  // delete the user
app.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.send({ message: "Single User Deleted", data: user });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = app;