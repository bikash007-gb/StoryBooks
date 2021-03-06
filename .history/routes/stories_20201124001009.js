const express=require('express')
const {ensureAuth}=require('../middleware/authMiddleware')
const Story=require('../models/Story')

const router=express.Router()

router.get('/add',ensureAuth,(req,res)=>{
    res.render('stories/add')
})
router.post('/', ensureAuth, async (req, res) => {
    try {
      req.body.user = req.user.id
      await Story.create(req.body)
      res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

module.exports=router