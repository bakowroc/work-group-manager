import { model, Schema } from 'mongoose';

import { generateRandomSlug } from './../utils/helpers';

const TaskSchema = new Schema({
  content: {
    required: true,
    type: String,
    unique: true
  },
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  },
  name: {
    required: true,
    type: String,
    unique: true
  },
  slug: {
    default: generateRandomSlug(),
    required: true,
    type: String,
    unique: true
  }
});

export default model('Task', TaskSchema);
