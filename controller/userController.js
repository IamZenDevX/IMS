const ErrorHandler = require('../utils/default/errorHandler');
const user = require('../models/userModel');
const bcrypt=require('bcryptjs');


exports.deleteuser = async (req, res, next) => {
    const { id } = req.params;
    const deleteduser = await user.findByIdAndDelete(id);
    res.json(Req.Params.id);
    console.log("Record Successfully Deleted !!");



}

exports.find = async (req, res, next) => {
    const { id } = req.params;
    let var_user_List;
    var_user_List = await user.findById(id, 'firstName lastName email phoneNumber password ');
    res.json(var_user_List);



}

exports.Login = async (req, res, next) => {
    const { email, password } = req.body;
    // let test;
    // let test12;
    let existinguser;
    let isValidPassword = false;
    // const newPassword = await bcrypt.hash("Admin@123", 10)
    // console.log(newPassword)
    // Can you please call this API
    try {
     
        // existinguser = await user.findOne(
        //     {
        //         email
        //     }).select("+password");

        existinguser = await user.findOne({ email }).select("+password");
    } catch (err) {
        console.log(err)
        const error = new ErrorHandler(
            'Signing up failed, please try again later.',
            422
        );
        return next(error);

    }
    if (!existinguser) {
        const error = new ErrorHandler(
            'User not exists with this email',
            422
        );
        return next(error);

    }
    else {
    }
    
    try {
        // console.log()
        const newPass = await bcrypt.hash("emma2024", 10);
        console.log(newPass)
        // i think password wrong generate thayo che
      
        console.log(existinguser)
        // console.log(existinguser.password)
        isValidPassword = await bcrypt.compare(password, existinguser.password );


        console.log(isValidPassword)
        // password kya create karo cho show kar jo ne

    } catch (err) {
        const error = new ErrorHandler(
            'Could not log you in, please check your credentials and try again.',
            500
        );
        return next(error);

    }
    if (!isValidPassword) {
        const error = new ErrorHandler(
            'Invalid credentials, could not log you in.',
            401
        );
        return next(error);

    }
    else {
    }



}

exports.putuser = async (req, res, next) => {
    const { email, firstName, lastName, password, phoneNumber } = req.body;
    const { ID } = req.params;
    const updateduser = await user.findByIdAndUpdate(ID,
        {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: password,
            email: email
        }
        , { new: true });
    res.json(Req.Params.ID);



}

exports.Register = async (req, res, next) => {
    // please use save method like this 
    // you were creating user before and then saving that makes hash of already hased password
    const { email, firstName, lastName, password, phoneNumber } = req.body;
    // let CreatedUser;
    // CreatedUser = await user.create({
    //     email,
    //     lastName,
    //     password,
    //     firstName,
    //     phoneNumber,
    // });
    const CreatedUser = user({
        email,
        lastName,
        password,
        firstName,
        phoneNumber,
    })

    const newUser = await CreatedUser.save();
    res.json(newUser);



}



// const udf1 = async (id) => {

// };

// const User-udf = async (email) => {

// };


