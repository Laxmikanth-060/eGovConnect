import Service from "../models/Services.js";

export const getService = async(req,res) => {
    const {name}=req.params;
    console.log(name);
    const title = name.toLowerCase();

    const service = await Service.findOne({ name:title });

    if (service) {
      return res
      .status(201).json({service});
    }else{
      return res.status(400).json({ error: "Currently not available." });
    }



}

export const addService = async(req,res) => {

    const{name,description,dept,docs,officers,time,fee,reference,eligibility}=req.body;
    const title=name.toLowerCase();
    const existingService = await Service.findOne({ name:title });
    if (existingService) {
      return res.status(400).json({ error: "Service already exists." });
    }
    
    const newService=new Service({
        name:title,
        description:description,
        department:dept,
        documents:docs,
        officers:officers,
        time:time,
        fee:fee,
        reference:reference,
        isActive:true,
        eligibility:eligibility,
    });

    if(newService){
        await newService.save();
        return res
        .status(201)
        .json({
          message: "Added Successfully",
        });
    }else {
        res.status(400).json({ error: "Invalid User Data" });
      }
}