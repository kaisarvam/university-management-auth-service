import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'

export const UserSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const UserModel = model<IUser>('User', UserSchema)
