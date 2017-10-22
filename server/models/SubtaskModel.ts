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
  task: {
    ref: 'Task',
    type: Schema.Types.ObjectId
  },
  createdAt: {
    default: new Date(),
    required: true,
    type: Date
  }
});

export default model('Subtask', SubtaskSchema);
