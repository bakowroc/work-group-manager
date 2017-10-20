import { model, Schema } from 'mongoose';

import { generateRandomSlug } from './../utils/helpers';

const WorkspaceSchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  description: {},
  boards: [{
    ref: 'Board',
    type: Schema.Types.ObjectId
  }],
  members: [{
    ref: 'User',
    type: Schema.Types.ObjectId
  }],
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

export default model('Workspace', WorkspaceSchema);
