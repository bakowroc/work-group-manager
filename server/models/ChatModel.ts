import { model, Schema } from 'mongoose';

const ChatSchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  type: {
    required: true,
    type: String,
    default: 'public'
  },
  description: {},
  members: [{
    ref: 'User',
    type: Schema.Types.ObjectId
  }],
  project: {
    ref: 'Project',
    type: Schema.Types.ObjectId
  },
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  }
});

export default model('Chat', ChatSchema);
