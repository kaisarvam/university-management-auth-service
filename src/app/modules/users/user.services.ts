import { IUser } from './user.interface'
import config from '../../../config'
import { generateUserId } from './user.utils'
import ApiError from '../../../errors/ApiError'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //Auto genarated incremental id

  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.defaultUserPassword as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user !')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
