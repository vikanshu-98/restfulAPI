const { default: mongoose } = require('mongoose')
const mongodb = require('mongoose')
const validator = require('validator')
const scheema= new mongodb.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    address:{
        type:String,
    }
})



const collection = new mongoose.model('studentDetail',scheema)


module.exports=collection