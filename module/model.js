const mongoose = require("mongoose");

const datas = mongoose.Schema
const emp = new datas ({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    contact:{
        type: Number
    }
}, {
    timestamps: true
})

module.exports =  user = mongoose.model("EmployeeDetails",emp)