const express = require("express");
// const productRoute = require("./router/product");
// const storeRoute = require("./router/store");
// const purchaseRoute = require("./router/purchase");
// const salesRoute = require("./router/sales");
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

// Store API
// app.use("/api/store", storeRoute);

// Products API
// app.use("/api/product", productRoute);

// Purchase API
// app.use("/api/purchase", purchaseRoute);

// Sales API
// app.use("/api/sales", salesRoute);
app.use("/user" , userRoute);

// ------------- Signin --------------
// let userAuthCheck;

// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;
//   let user;
//   try {
//     user = await UserRoute.findOne({ email, password });
//     if (user) {
//       let token;
//       try {
//         token = jwt.sign(
//           { email: user.email },
//           'supersecret_dont_share',
//           { expiresIn: '1h' }
//         );
//       } catch (err) {
//         console.log("Error in generating token");
//         return res.status(500).send("Error in generating token");
//       }
      
//       userAuthCheck = user;
//       return res.json({
//         email: user.email,
//         token: token
//       }); 
//     } else {
//       userAuthCheck = null;
//       return res.status(401).send("Invalid Credentials");
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// });

// ------------------------------------

// Registration API
// app.post("/api/register", (req, res) => {
//   let registerUser = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//     phoneNumber: req.body.phoneNumber,
//     // imageUrl: req.body.imageUrl,
//   });

//   registerUser
//     .save()
//     .then((result) => {
//       res.status(200).send(result);
//       alert("Signup Successfull");
//     })
//     .catch((err) => console.log("Signup: ", err));

    
//   console.log("request: ", req.body);
// });


app.get("/testget", async (req,res)=>{
  const result = await Product.findOne({ _id: '6429979b2e5434138eda1564'})
  res.json(result)

})

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
}); 

const uri =`mongodb+srv://admin01:admin01@cluster0.rei7tip.mongodb.net/react_ims?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Succesfull")

}).catch((err) => {
  console.log("Error: ", err)
})
