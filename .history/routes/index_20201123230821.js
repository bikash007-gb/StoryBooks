const express=require('express')
const router=express.Router()
const {ensureAuth,ensureGuest}=require('../middleware/authMiddleware')

router.get('/',ensureGuest,(req,res)=>{
    res.render('Login',{
        layout:'login'
    })
})
router.get('/dashboard',ensureAuth,(req,res)=>{
    res.render('dashboard')
})
module.exports=router