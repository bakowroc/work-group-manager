import { model, Schema } from 'mongoose';

import { generateRandomSlug } from './../utils/helpers';

const BoardSchema = new Schema({
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

export default model('Board', BoardSchema);
