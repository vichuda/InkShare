import { Router } from 'express'
import postRoutes from './post.routes'
import bookRoutes from './book.routes'
import shipments from './shipments.routes'

const router = new Router()

router.use('/post', postRoutes)
router.use('/books', bookRoutes)
router.use('/shipments', shipments)

export default router
