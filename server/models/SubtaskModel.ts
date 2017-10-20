import { model, Schema } from 'mongoose';

const SubtaskSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  isDone: {
    required: true,
    type: Boolean
  },
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  }
});

export default model('Subtask', SubtaskSchema);
