import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  username: {
    required: true,
    type: String,
    unique: true
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  slug: {
    default: '',
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  },
  tasks: [{
    ref: 'Task',
    type: Schema.Types.ObjectId
  }],
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  }
});

export default model('User', UserSchema);
