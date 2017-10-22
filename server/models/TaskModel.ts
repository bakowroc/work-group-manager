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
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  assigned: [{
    ref: 'User',
    type: Schema.Types.ObjectId
  }],
  subtasks: [{
    ref: 'Subtask',
    type: Schema.Types.ObjectId
  }],
  tags: [{
    ref: 'Tag',
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
    type: String,
    unique: true
  },
});

export default model('Task', TaskSchema);
