import { model, Schema } from 'mongoose';

import { generateRandomSlug } from './../utils/helpers';

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
  },
  slug: {
    default: generateRandomSlug(),
    required: true,
    type: String,
    unique: true
  },
});

export default model('Chat', ChatSchema);
