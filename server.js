const express = require ('express');
const app = express();
const Person= require('./models/userModel');
app.use(express.json())

const dotenv = require('dotenv');
dotenv.config();

            // connect database
const connectDB = require('./helpers/connectDB');
const req = require('express/lib/request');
connectDB();

const PORT= process.env.PORT;
app.listen(PORT,(err)=> err? console.log(err) : console.log(`server is running on port ${PORT}`));

             //Create and Save a Record of a Model//
// const newPerson = new Person ({
//     name : 'Jasmin', 
//     age : 24,
//     favoriteFoods : ['Omelette','Pizza'],
// });
// newPerson.save((err, data)=> {
//     console.log(data)
// });

             // Create Many Records with model.create()
const arrayofPeople =[
  {name: 'sarah', age: 21, favoriteFoods:['Salade', 'cordon bleu', 'soupe'] },
  {name: 'yessine', age: 24, favoriteFoods : ['pasta', ' poisson','riz']},
  {name: 'wassim', age: 29, favoriteFoods : ['pizza','steak','borito']}, 
  {name: 'rayhane', age: 26, favoriteFoods : ['pasta','salade']},
  {name: 'omar', age: 18, favoriteFoods : ['escalope','riz','soupe']}];

//   Person.create(arrayofPeople).then(data => {console.log(data)}).catch(err => {console.log(err)});

            //   Use model.find() to Search  Database
// Person.find({name:'sarah'},(err, data) => {
//     if(err) {
//         console.log(err)
//    } else {
//         console.log(data)
//     }})

            // Return a Single Matching Document from Database
// Person.findOne({favoriteFoods:{$all:['pizza']}}, (err, data) =>{
//     if(err) {
//         console.log(err)
//    } else {
//         console.log(data)
//     }})

            // Search Database By _id
// Person.findById({_id: '624330a19829b00cbcb9d8d1'}, (err, data) =>{
//     if(err) {
//         console.log(err)
//    } else {
//         console.log(data)
//     }})

            // Perform Classic Updates by Running Find, Edit, then Save
//Person.findById({_id:'624330a19829b00cbcb9d8cd'}, (err, res) => {
   //if(err) {
   //    console.log(err)
  // }else{
  //  res.favoriteFoods.push('hamburger')
  //  res.save((err, newres) => {
   //  if(err) {
  //     console.log(err)
   //  }else{
   //    console.log(newres)
   // }})

  // }})

            // Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate({name:'rayhane'}, {$set:{age: 20}}, {new: true}, (err, res) => {
//     if(err) {
//         console.log(err)
//    } else {
//         console.log(res)
//     }});

            // Delete One Document Using model.findByIdAndRemove

//             Person.findByIdAndRemove({_id: '624330a19829b00cbcb9d8d1'}, (err, doc) =>{
// if (err){
//     console.log(err)} 
// else {
//     console.log("Deleted : ", doc);
// }
// });

            // Delete Many Documents with model.remove()

//             var removeManyPeopel = function(done) {
//     var nameToRemove = 'yessine';
// Person.remove({name:nameToRemove}, (err, res)=>{
//     if(err) {
//         console.log(err)
//    } else {
//         console.log(res)
//     }})
// };
            // Chain Search Query Helpers to Narrow Search Results
Person.find({favoriteFoods : {$all : ['burritos']}}).sort({age: 'asc'}).limit(2).select('-age').exec((err,data)=>{
    if (err){
        console.log(err)
    } else{
        console.log(data)
    }});
