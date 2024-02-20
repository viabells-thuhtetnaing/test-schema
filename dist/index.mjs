// src/user.ts
import mongoose from "mongoose";
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
var UserTestModel = mongoose.model("UserTest", userSchema);
export {
  UserTestModel
};
//# sourceMappingURL=index.mjs.map