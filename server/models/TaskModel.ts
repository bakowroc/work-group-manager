import { model, Schema } from 'mongoose';

import { generateRandomSlug } from './../utils/helpers';

const TaskSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  prior: {
    type: String
  },
  order: {
    type: Number,
    required: true,
    default: 0
  },
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  assigned: [{
    ref: 'User',
    type: Schema.Types.ObjectId
  }],
  board: {
    ref: 'Board',
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
    type: String
  },
});

export default model('Task', TaskSchema);
