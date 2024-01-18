const express=require('express');
const mongoose=require('mongoose');
const dbUrl='mongodb+srv://jaystrp2022:W45rRRKU3c6QENnB@cluster0.rresipz.mongodb.net/?retryWrites=true&w=majority'

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
       type:String,
       required:true, 
    }
})

const userModel=mongoose.model('users',userSchema);

//connect with mongoose
 mongoose.connect(dbUrl)
 .then(()=>{
    console.log("connected to our localhost.1 database");

    //create a information to be saved..
    const user1=new userModel({
        name:'khushmeet chugh',
        email:'khushmeet34@gmail.com',
    })
    user1.save()
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
        mongoose.connection.close();
    })
 })

const app=express();
const port=4000;
//routes : "hello"=>>hello mern learners
app.get('/hello',(req,res)=>{
    res.status(200).json("hello mern learners");
})

app.listen(port,()=>{
    console.log(`server is running at port: ${port}`);
})