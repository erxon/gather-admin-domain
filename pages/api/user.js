import nextConnect from 'next-connect'
import auth from '@/utils/middleware/auth'
import { deleteUser, createUser, updateUserByUsername } from '@/utils/controllers/adminController'

const handler = nextConnect()

handler
  .use(auth)
  .get((req, res) => {
    const {username, createdAt} = req.user;
    // res.json({ user: { name, username, favoriteColor } })
    res.json({ user: {username, createdAt}})
  })
  .post(async (req, res) => {
    const { username, password} = req.body
    const result = await createUser(req, { username, password })
    res.status(200).json(result)
  })
  .use((req, res, next) => {
    if (!req.user) {
      res.status(401).send('unauthenticated')
    } else {
      next()
    }
  })
  .put(async (req, res) => {
    const update = req.body
    const user = await updateUserByUsername(req, req.user.username, update)
    res.json({ user })
  })
  .delete(async (req, res) => {
    await deleteUser(req)
    req.logOut()
    res.status(204).end()
  })

export default handler