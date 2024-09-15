const { default: mongoose, Schema } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

const frmPostSchema = new Schema(
  { title: { type: String }, orgUser: { type: mongoose.Schema.Types.ObjectId, ref: "users" } },
  { collection: "frmPost", toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// virtual یک فیلد مجازی هستش که ارتباط جداول رو  حفط میکنیم

frmPostSchema.virtual("comments", {
  ref: "frmComment",
  localField: "_id",
  foreignField: "frmPost",
});

const frmPost = mongoose.model("frmPost", frmPostSchema);
module.exports = frmPost;
