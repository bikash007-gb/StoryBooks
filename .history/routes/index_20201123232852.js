const express=require('express')
const router=express.Router()
const {ensureAuth,ensureGuest}=require('../middleware/authMiddleware')
const Story=require('../models/Story')

router.get('/',ensureGuest,(req,res)=>{
    res.render('Login',{
        layout:'login'
    })
})
router.get('/dashboard',ensureAuth,async(req,res)=>{
    try{
        const stories=await Story.find({user:req.user.id}).lean()
        res.render('dashboard',{
            name:req.user.firstName,
            stories
        })
    }catch(err){
        console.error(err)
    }
    
})
module.exports=router