
const mongoose = require('mongoose');

// Schema for School
const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  class: {
    from: { type: String, required: true },
    to: { type: String, required: true },
  },
  board: { type: String, enum: ['State Board', 'CBSC Board', 'ICSC Board'], required: true },
});

// Schema for Admin
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

// Schema for Plan
const planSchema = new mongoose.Schema({
  duration: { type: String, required: true },
});

// Main User Schema
const userSchema = new mongoose.Schema({
  school: schoolSchema,
  admin: adminSchema,
  plan: planSchema,
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true }, // Add the date field
});


  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;
  