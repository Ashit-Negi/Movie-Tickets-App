const router = require('express').Router()
const Theater = require("../models/theaterModel")


router.post("/add-theater" , async(req , res)=>{
  try {
    const newTheater =  new Theater(req.body)
    await newTheater.save()
    res.send({
     success : 'true',
     message :'New theater has been added!'
    })
  } catch (error) {
    res.send({
      success: 'false',
      message: error.message
    })
  }
})

router.put("/update-theater" , async(req , res)=>{
  try {
    await Theater.findById(req.body.theaterId, req.body)
    res.send({
      success: true,
      message: "Theater has been updated"
    })
    
  } catch (error) {
    res.send({
      success: false,
      message:err.message
    })  
  }
})
router.delete("/delete-theater" , async(req , res)=>{
  try {
    await Theater.findById(req.body.theaterId)
    res.send({
      success: true,
      message: "Theater has been deleted"
    })
    
  } catch (error) {
    res.send({
      success: false,
      message:err.message
    })  
  }
})
module.exports = router;