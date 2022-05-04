import mongoose from 'mongoose'
import User from './userSchema.js'
import 'dotenv/config'

await mongoose.connect(process.env.URI_MONGODB_LOCAL)
//CRUD

async function createUser() {
    try {
        const user = await User.create({ //Các hàm gọi đến database MongoDB là bất đồng bộ async
            name: "ruins",
            age: 22,
            hobbies: ["weight lifting", "bowling"],
            email: "NAME@gmail.com"
        })
        console.log(user)

    } catch (error) {
        console.error(error.message)
    }
}
//createUser()

async function findUserByID(id) {
    try {
        const user = await User.findById(id)
        console.log(user)
    } catch (error) {
        console.error(error.message)
    }
}
//findUserByID("6272b10f87368bb0e22ecdb0") 

async function updateUser(id, dataUpdate) {
    try {
        const user = await User.findByIdAndUpdate(id, dataUpdate) //Lấy đối tượng trước sau đó mới update đối tượng
        console.log(user)
    } catch (error) {
        console.error(error.message)
    }
}
//updateUser("6272b10f87368bb0e22ecdb0", { name: "ruins_update", age: 20 })

async function deleteUser(id) {
    try {
        const user = await User.findById(id)
        await user.remove() //Một cách khác để remove thay vì dùng User.findByIdAndRemove(id)
        console.log(user)
    } catch (error) {
        console.error(error.message)
    }
}
//deleteUser("6272b10f87368bb0e22ecdb0")
