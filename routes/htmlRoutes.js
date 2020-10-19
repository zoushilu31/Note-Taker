const router = require('express').Router();
const path = require('path');

// GET home page
router.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

// GET subpage
router.get("/notes",function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})

module.exports = router;