import React ,{useState}from 'react'
import axios from 'axios';
import {TextField } from "@mui/material";

import './Post.css'

function Post() {

const [name,setName]=useState("");
const [description,setDescription]=useState("");
const [dept,setDept]=useState("");
const [docs,setDocs]=useState("");
const [officers,setOfficers]=useState("");
const [time,setTime]=useState("");
const [fee,setFee]=useState("");
const [reference,setReference]=useState("");
const [application,setApplicatin]=useState("");

const url =process.env.REACT_APP_BACKEND_URL;

const submitHandler=async(e)=>{

    e.preventDefault();
    console.log(name,dept,reference);
    try{
      const data = await axios.post(`${url}/services/add`, {
          name,
          description,
          dept,
          docs,
          officers,
          time,
          fee,
          reference,
          application
      });

      if(data.data.message==="Added Successfully")
      alert(`${name} added Successfully`);

    }catch(err){
      console.log(err);
    }

}

  return (
    
    <div className='post-parent-container'>

      <h1 className='post-title'>Create new Service</h1>

    <form onSubmit={submitHandler}>
      <div className='post-inner-container'>

       <div className='post-main-container'>
        <p>Name </p>
        <TextField  SCHOLORSHIP
       type="text"
       placeholder="Name of the Service"
       name="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
       required
       label="Name" variant="outlined"
       sx={{ width: "350px" }}
      /></div>
 
 <div className='post-main-container'>
 <p>Description </p>
      <TextField 
       type="text"
       placeholder="Description of the Service"
       name="name"
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       required
       label="Description" variant="outlined"
       sx={{ width: "350px" }}
        /></div>

<div className='post-main-container'>
<p>Department </p>
  <TextField 
       type="text"
       placeholder="Concerned Depatment Name"
       name="dept"
       value={dept}
       onChange={(e) => setDept(e.target.value)}
       required
       label="Department" variant="outlined"
       sx={{ width: "350px" }}
       /></div>


<div className='post-main-container'>
  <p>Documents </p>
  <TextField 
        type="text"
        placeholder="Documents Required"
        name="docs"
        value={docs}
        onChange={(e) => setDocs(e.target.value)}
        // required
      label="Documents" variant="outlined" 
      sx={{ width: "350px" }}
      /></div>

<div className='post-main-container'>
  <p>Concerned Office </p>
  <TextField 
          type="text"
          placeholder="Concerned Offices"
          name="officers"
          value={officers}
          onChange={(e) => setOfficers(e.target.value)}
          // required
      label="Concerned Offices" variant="outlined" 
      sx={{ width: "350px" }}
      /></div>

<div className='post-main-container'>
  <p>Processing Time </p>
  <TextField 
      type="text"
      placeholder="legal time to be taken"
      name="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      // required
      label="Process Time" variant="outlined" 
      sx={{ width: "350px" }}
      /></div>

<div className='post-main-container'>
  <p>Fee</p>
  <TextField 
       type="text"
       placeholder="Fee Prescribed by Govt."
       name="fee"
       value={fee}
       onChange={(e) => setFee(e.target.value)}
      //  required
      sx={{ width: "350px" }}
      label="Fee" variant="outlined" /></div>
    

    <div className='post-main-container'>
      <p>Reference Link </p>
      <TextField 
       type="text"
       placeholder="Reference website link"
       name="reference"
       value={reference}
       onChange={(e) => setReference(e.target.value)}
      //  required
      sx={{ width: "350px" }}
      label="Reference" variant="outlined" /></div>

    <div className='post-main-container'>
      <p>Application Form </p>
      <TextField 
       type="file"
       placeholder="Application Form"
       name="application"
       value={application}
       onChange={(e) => setApplicatin(e.target.value)}
       variant="outlined" 
       sx={{ width: "350px" }}
       /></div>

    <button className='post-button'>Register Service</button>
    </div>
    </form>
</div> 

  )
}

export default Post