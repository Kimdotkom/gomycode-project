const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register
exports.register = async(req, res) =>{
    try {
        const {name, email, password, phone} = req.body;
        const foundUser = await User.findOne({email})
        if(foundUser){
            res.status(400).send({errors: [{msg : 'email already exist !'}]})
        }

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt)

         const newUser = new User({...req.body})
         newUser.password = hashedPassword;

         await newUser.save();

        const token = jwt.sign({
            id : newUser._id
        } ,
        process.env.SECRET_KEY)

         res.status(200).send({msg : 'Register Succesfully !', newUser, token})
    } catch (error) {
        res.status(400).send({errors: [{msg : 'Cannot Register !'}]})
    }
}


//Login
exports.login = async(req, res) =>{
    
    try {
        const {email, password} = req.body;
        const foundUser = await User.findOne({email});
        if(!foundUser){
            res.status(400).send({errors: [{msg : 'Bad credential  1!'}]})
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password)
        if(!checkPassword){
            res.status(400).send({errors: [{msg : 'Bad credential  2!'}]})
        }

        const token = jwt.sign({
            id : foundUser._id
        } ,
        process.env.SECRET_KEY)

        res.status(200).send({msg : 'Login Successfully !', foundUser, token})
    } catch (error) {
        res.status(400).send({errors: [{msg : 'Cannot Login !'}]})
    }
}