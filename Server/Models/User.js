const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo:{
    type: String,
    required: true,
  },
  message:{
    type: String,
    required: true,  
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
