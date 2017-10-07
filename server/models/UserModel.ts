import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  },
  slug: {
    default: '',
    required: true,
    type: String,
    unique: true
  },
  username: {
    required: true,
    type: String,
    unique: true
  },
});

export default model('User', UserSchema);
