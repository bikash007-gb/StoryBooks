const express=require('express')
const {ensureAuth}=require('../middleware/authMiddleware')
const Story=require('../models/Story')