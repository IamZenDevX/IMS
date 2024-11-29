const express = require("express");
const userRoute = require("./router/userRoute");
const cors = require("cors");
const UserRoute = require("./models/userModel");
// const Product = require("./models/Product");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const indexfile = require('./router/index')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/',indexfile)


app.use("/user" , userRoute);



app.get("/testget", async (req,res)=>{
  const result = await Product.findOne({ _id: '6429979b2e5434138eda1564'})
  res.json(result)

})

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
}); 

const uri =`mongodb+srv://name:password@cluster0.rei7tip.mongodb.net/ims?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Succesfull")

}).catch((err) => {
  console.log("Error: ", err)
})
