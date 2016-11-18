import { Router } from 'express'
import PostRoutes from './post.routes'
import BookRoutes from './book.routes'

const router = new Router()

router.use('/post', PostRoutes)
router.use('/books', BookRoutes)

export default router
