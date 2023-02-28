const axios = require('axios')
const express = require('express')
const port =8080;

const app = express();

app.get('/',(req,res)=>{
    res.send("hello");
})

setTimeout(() => {
    console.log("get method............")
    axios.get("https://reqres.in/api/users/2").then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})   
}, 1000);


setTimeout(() => {
    console.log("post method............")
    axios.post("https://reqres.in/api/users",{
    "name": "morpheus",
    "job": "leader"
}).then((result)=>{
    console.log(result.data);
}).catch((err)=>{
    console.log(err);
})
    
}, 3000);


setTimeout(() => {
    console.log("put method............")
    axios.put("https://reqres.in/api/users/2",{
    "name": "morpheus",
    "job": "zion resident"
}).then((result)=>{
    console.log(result.data);
}).catch((err)=>{
    console.log(err);
})
    
}, 10000);

setTimeout(() => {
    console.log("delete method............")
    axios.delete("https://reqres.in/api/users/2").then(()=>{
    console.log("deleted")
}).catch((err)=>{
    console.log("error deleting")
})
    
}, 15000);




app.listen(port,()=>{
    console.log("listening");
})