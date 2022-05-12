const express = require('express') 
require('../database/connection')
const studnet = require('../database/student')
const router = express.Router()

//get request
router.get('/student',async(req,res)=>{ 
    try{ 
        res.send(await studnet.find())
    }
   catch(err){
       res.status(201).send(err)
   }

})

//post request
router.post('/student',async(req,res)=>{ 
    try{ 

        const data=new studnet(req.body)
        const student = await data.save()
        res.send(student);
    }
   catch(err){
       res.status(201).send(err)
   }

})

//put/patch request 

router.patch('/student/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const result = await studnet.findByIdAndUpdate(id,req.body,{new:true})
        res.send(result)
    }catch(err){
        res.send(err)
    }

})

//delete student 
router.delete('/student/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        // if(!id){
        //     res.status(400).send()
        // }
        const result =await studnet.findByIdAndDelete(id);
        res.send(result)
    }
    catch(Ex){
        res.status(500).send(Ex)
    } 
})



module.exports = router