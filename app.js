const { default: mongoose } = require("mongoose");
let OrgUser = require("./components/orgUser/orgUser");
const frmPost = require("./components/forum/frmPost/frmPost");
const frmComment = require("./components/forum/frmComments/frmComments");

// Read

// (async () => {
//   let users = await OrgUser.find();
//   console.log(users);
// })();

// Create

// (async () => {
//   let newUser = new OrgUser({ title: "test7" });
//   await newUser.save();
//   let users = await OrgUser.find();
//   console.log(users);
// })();

// update

// (async () => {
//   let users = await OrgUser.updateMany({ title: "test7"},{ title: "Hi" });
//   console.log(users);
// })();

// delete

// (async () => {
//   let allUsersDelete = await OrgUser.deleteMany({ title: "user2" });
//   let usersDelete = await OrgUser.deleteOne({ title: "Hi" });
//   console.log(allUsersDelete, usersDelete);
// })();

// (async () => {
//   const session = await mongoose.startSession();
//   try {
//     session.startTransaction();

//     let newUser1 = new OrgUser({ title: "transaction_test1" });
//     await newUser1.save({ session });
//     let newUser2 = new OrgUser({ title: "transaction_test2" });
//     await newUser2.save({ session });
//     await session.commitTransaction();

//     let users = await OrgUser.find();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//     await session.abortTransaction();
//   } finally {
//     session.endSession();
//   }
// })();

//  اتصال 2 تا لیست به هم دیگه
// دوتا جدول پست و کامنت میخایم درست کنیم و جدول کامنت رو وصل کنیم به جداول پست هامون
// و روی ان کوئری بگیریم

(async () => {
  // let newUser1 = new OrgUser({ title: "user1" });
  // await newUser1.save();
  // //
  // let newUser2 = new OrgUser({ title: "user2" });
  // await newUser2.save();
  // //
  // let user1 = await OrgUser.findOne({ title: "user1" });
  // let newPost1 = new frmPost({ title: "post1", orgUser: user1._id });
  // newPost1 = await newPost1.save();
  // //
  // let user2 = await OrgUser.findOne({ title: "user2" });
  // let newPost2 = new frmPost({ title: "post2", orgUser: user2._id });
  // newPost2 = await newPost2.save();
  // //
  // let newComment1 = new frmComment({ title: "comment1", frmPost: newPost1._id, orgUser: user1._id });
  // await newComment1.save();
  // let newComment11 = new frmComment({ title: "comment11", frmPost: newPost1._id, orgUser: user1._id });
  // await newComment11.save();
  // //
  // let newComment2 = new frmComment({ title: "comment2", frmPost: newPost2._id, orgUser: user2._id });
  // await newComment2.save();
  // let newComment22 = new frmComment({ title: "comment22", frmPost: newPost2._id, orgUser: user2._id });
  // await newComment22.save();
  //
  // let allComments = await frmComment.find();
  // let allComments = await frmComment.find().populate({ path: "frmPost" });
  // اگر به صورت سلسله وار هم یکسری وابستگی داشت ما میتونیم بیایم و بهش یکسری آرایه پاس بدهیم
  //   let allComments = await frmComment.find().populate([{ path: "frmPost" }, { path: "orgUser" }]);
  //    به خطا نخورم بیا و اسم هارو یکی در نظر بگیر
  //   console.log(allComments);
  //
  let allPost = await frmPost.find().populate({ path: "comments" });
  console.log(allPost[1].comments);

  //  populate دو مدل
  // populate معمولی که در بالا مثال اش زده شده
  //   populate با استفاده از ویرچوال ها که به صورت مجازی یک فیلد درست کنییم که حافظه زیاد ازمون اشغال نکنه
})();
