import { model, Schema } from 'mongoose';

import { generateRandomSlug } from './../utils/helpers';

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
  },
  slug: {
    default: generateRandomSlug(),
    required: true,
    type: String,
    unique: true
  },
});

export default model('ChatMessage', ChatMessageSchema);
