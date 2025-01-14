import { Schema, model, models } from "mongoose";
import { types } from "util";
const UserSchema = new Schema({
  ClerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});
const User = models?.User||model('User',UserSchema )

export default User