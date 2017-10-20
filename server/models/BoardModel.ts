import { model, Schema } from 'mongoose';

import { generateRandomSlug } from './../utils/helpers';

const BoardSchema = new Schema({
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  },
  icon: {
    required: true,
    type: String,
    unique: false
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
  },
  tasks: [{
    ref: 'Task',
    type: Schema.Types.ObjectId
  }],
  project: {
    ref: 'Project',
    type: Schema.Types.ObjectId
  },
});

export default model('Board', BoardSchema);
