const mongoose = require('mongoose');
// you can build your schemas directly from your ERD. THE ERD should be your guide
const applicationSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  notes: String,
  postingLink: String,
  status: { 
    type: String,
    enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
    required: true,
  }
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//AS A USEER I SHOULD go to website and see landing page witg sign up or sign in buttons
//as a user, i should be able to create a job application to track its status
//as a user, I expect... xyz
//index/get/users/:userId/applications

//prject 2 should have user stories, restful routes, and ERD

//you  can build your schema directly off your erd. example below

//const applicaitionSchema = mongoose.Schema({
//company {
//type: string
//reuired: true

//}, 
//title: {
//type: string,
//required: true,
//
//notes: String,
//postingLink}