import { model, Schema } from 'mongoose';

const ChatMessageSchema = new Schema({
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  message: {
    required: true,
    type: String
  },
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  },
  chat: {
    ref: 'Chat',
    type: Schema.Types.ObjectId
  }
});

export default model('ChatMessage', ChatMessageSchema);
