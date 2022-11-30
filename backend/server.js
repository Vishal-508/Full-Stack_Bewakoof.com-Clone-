const express =require("express");
const app =express();
const PORT=5001;
app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(PORT,()=>{
console.log(`listening at port ${PORT}`)
})