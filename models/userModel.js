const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
{
email: {
type: String, 
},
firstName: {
type: String, 
},
lastName: {
type: String, 
},
password: {
type: String, 
},
phoneNumber: {
type: Number, 
},
},
);


// userSchema.pre("save", async function (next) {
//     if(!this.isModified("password")){
//         return next()
//     }
// // now new account creat kari try karjo
// this.password = await bcrypt.hash(this.password, 10);

// next();
// });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    console.log(this.password)
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password)
    next();
  });



module.exports = mongoose.model("user", userSchema);
