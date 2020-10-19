const express = require("express")
const app = express();
const PORT = process.env.PORT || 3001 

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
const htmlroute = require("./routes/htmlroutes")
app.use(htmlroute)
const apiroutes = require("./routes/apiroutes")
app.use(apiroutes)
app.listen(PORT,function(req, res){
    console.log("app is listening " + PORT)
})