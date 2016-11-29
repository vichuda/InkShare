import { Router } from 'express'
import postRoutes from './post.routes'
import book from './book.routes'
import shipments from './shipments.routes'
import user from './user.routes'

const router = new Router()

router.use('/post', postRoutes)
router.use('/books', book)
router.use('/shipments', shipments)
router.use('/user', user)

export default router
