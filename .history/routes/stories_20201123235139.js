const express=require('express')
const {ensureAuth}=require('../middleware/authMiddleware')
const Story=require('../models/Story')

const router=express.Router()

router.get('/add',ensureAuth,(req,res)=>{
    res.render('stories/add')
})

module.exports=router