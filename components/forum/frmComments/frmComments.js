const { default: mongoose, Schema } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

const frmCommentSchema = new Schema(
  {
    title: { type: String },
    orgUser: { type: mongoose.Schema.Types.ObjectId, ref: "orgUser" },
    frmPost: { type: mongoose.Schema.Types.ObjectId, ref: "frmPost" },
  },
  { collection: "frmComment" }
);
const frmComment = mongoose.model("frmComment", frmCommentSchema);
module.exports = frmComment;
