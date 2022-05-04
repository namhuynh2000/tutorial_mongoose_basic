import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    email: {
        type: String,
        required: true, //Khi khởi tạo đối tượng, bắt buộc phải truyền thuộc tính này
        lowercase: true, //Chuyển toàn bộ ký tự thành chữ thường
        //uppercase: true
    },
    createdAt: {
        type: Date,
        immutable: true, //Không thể thay đổi giá trị
        default: () => Date.now() //Nếu không có giá trị khởi tạo, sẽ tự tạo theo default. Ta truyền vào 1 function để mỗi đối tượng sẽ chạy func và có giá trị khác nhau. Nếu không sử dụng func thì tất cả các đối tượng sẽ được khởi tạo cùng 1 giá trị
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String], //Mảng string
    address: addressSchema
})

export default mongoose.model('users', userSchema) //Tên users phải trùng tên collection trong mongoDB, nếu không mongoDB sẽ tạo collection mới