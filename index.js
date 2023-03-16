const mongoose = require ("mongoose")

mongoose.connect('mongodb+srv://diego:diego3124@cluster0.7knqtx7.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model("User", {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: "Jose", edad: 1})
    const saveUser = await user.save()
    console.log(saveUser)
}

// crear()

const buscarTodosUsers = async () => {
    const users = await User.find()
    console.log(users)
}

//  buscarTodosUsers() 

const buscar = async () => {
    const user = await User.find({username: "Alex"})
    console.log(user)
}

// buscar()

const buscarUno = async () => {
    const user = await User.findOne({username: "Alexx"})
    console.log(user)
}

// buscarUno()

const actualizar = async () => {
    const user = await User.findOne({username: "Alex"})
    console.log(user)
    user.edad = 17
    await user.save()
}

// actualizar()

const eliminar  = async () => {
    const user = await User.findOne({username: "Jose"})
    console.log(user)
    if (user){
        await user.deleteOne()
    }
   }

eliminar()



