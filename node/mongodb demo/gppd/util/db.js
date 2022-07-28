const mongoose = require('mongoose');  //used mongoose
const validator = require('validator')  //validator used for validation

mongoose.connect('mongodb+srv://admin:admin@cluster0.6pj7pwk.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    age: {
        type: Number,
        require: true,
        validate(value) {
            if (value < 0) {
                throw new Error('age must not be negative')
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('it should be email')
        }
    },
    password: {
        type: String,
        required:true,
        minlength:5
    }
})

const User = mongoose.model('User', userSchema)
module.exports=User;
// const user1 = new User({
//     name: 'Abhi Shetty',
//     age: 26,
//     email:'abhi@gmail.com',
//     password:'abhishek'
// })
// user1.save()

//     .then(res => console.log(res))
//     .catch(e => console.log(e))

