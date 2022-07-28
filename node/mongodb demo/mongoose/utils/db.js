//mongoose can be used to specify the type and their validation for mongodb..

const mongoose = require('mongoose');  //used mongoose
const validator = require('validator')  //validator used for validation

//useUnifiedTopology: true:- it is False by default.
//Set to true to opt in to using the MongoDB driver's new connection management engine.
// You should set this option to true , except for the unlikely case that it prevents you from maintaining a stable connection.

// useNewUrlParser: true :- allow users to fall back to the old parser if they find a bug in the new parser.

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
}
})

const User = mongoose.model('User', userSchema)

// const user1=new User({
//     name:'Abhi Shetty',
//     age:26
// })
// user1.save()

// .then(res=>console.log(res))
// .catch(e=>console.log(e))

///example of validation with negative age and email
const user2 = new User({
    name: 'ADAM Shetty',
    age: 13,
    email: 'abhi@gmail.com'
})
user2.save()


    .then(res => console.log(res))
    .catch(e => console.log(e))