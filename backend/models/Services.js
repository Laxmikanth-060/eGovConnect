import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true, 
  },
  // category: {
  //   type: String,
  //   required: true, 
  // },
  department:{
    type: String,
    required: true, 
  },
  // icon: {
  //   type: String, 
  //   default: "", 
  // },
  documents: {
    type: String, 
    required:true,
    // default: [],
  },
  officers:{
    type: String, 
    required:true,
    // default: [],
  },
  time: {
    type: String, 
    default: "N/A",
  },
  fee: {
    type: String, 
    default: "0", 
  },
  reference:{
    type: String,
    required:true,
  },
  isActive: {
    type: Boolean,
    default: true, 
  },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
