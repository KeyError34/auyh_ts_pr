import { strict } from 'assert';
import { Schema, model, Document, Types } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  tasks: Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  },
  {
    timestamps: true,
  }
);
const User = model<IUser>("User", userSchema)
export default User;
