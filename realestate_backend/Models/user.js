const mongoose = require("mongoose");
const crypto = require("crypto");
const{ v1:uuidv1 } = require("uuid");

//user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 20
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 20
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 50
    },
    hashed_password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true,
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
   
},
{ timestamps: true }
); 

// Create virtual field
userSchema.virtual('password')
.set(function(password) {
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPword(password)
})
.get(function() {
    return this.password
})

userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPword(plainText) === this.hashed_password;
    },
    

encryptPword: function(password) {
    if(!password) return '';
    try{
        return crypto.createHmac('sha1', this.salt)
                        .update(password)
                        .digest('hex')
    } catch (err) {
        return "";
    }
}
};

module.exports = mongoose.model("User", userSchema);
