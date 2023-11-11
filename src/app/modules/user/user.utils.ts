import { User } from './user.model'

export const FindLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generateUserId = async () => {
  const lastUserId = await FindLastUserId()
  const currentUserId = lastUserId || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0')

  return incrementedId
  // LastUserId++;
  // return String(LastUserId).padStart(5,'0');
}
