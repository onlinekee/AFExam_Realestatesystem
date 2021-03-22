const User = require("../Models/user");
const jwt = require('jsonwebtoken');
const expressJwt = require ('express-jwt');
const {errorHandler} = require('../helpers/dbErrorHandler')

exports.signup = (req, res) =>{
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json({
            user
        })
    })

}
exports.signIn = (req,res) =>{
    //signin based on email
    const{email, password} = req.body
    User.findOne({email}, (err,user) => {
        if(err || !user) {
            return res.status(400).json({
                error: 'The email you entered is not valid.please enter the valid email'
            });
        }
        //create authenticate method in user model
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'please enter the matching password'
            })
        }
        //generate signedtoken with userId and secret no
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        res.cookie('t', token,{ expire: new Date() + 9999});

        const {_id, firstName, lastName, email, role} = user
        return res.json({token, user:{_id, firstName, lastName, email, role} });
    });

};

exports.signOut = (req,res) => {
    res.clearCookie('t')
    res.json({message: 'SignOut successfully'})
};

exports.requireSignIn = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
});

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: "Access Denied!"
        });
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0 || req.profile.role === 2) {
        return res.status(403).json({
            error: "Access Denied for normal users!"
        });
    }
    next();
};