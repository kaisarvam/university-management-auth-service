import { UserModel } from './users.model'
import { IUser } from './users.interface'
import config from '../../../config'
import { generateUserId } from './users.utils'

export const createUserService = async (user: IUser): Promise<IUser | null> => {
  //Auto genarated incremental id

  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.defaultUserPassword as string
  }
  const createdUser = await UserModel.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user !')
  }
  return createdUser
}
