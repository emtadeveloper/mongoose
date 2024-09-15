const { default: mongoose, Schema } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

const UserSchema = new Schema({ title: { type: String } }, { collection: "orgUser" });
const User = mongoose.model("orgUser", UserSchema);
module.exports = User;
