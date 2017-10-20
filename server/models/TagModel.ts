import { model, Schema } from 'mongoose';

const TagSchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  }
});

export default model('Tag', TagSchema);
