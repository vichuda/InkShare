import { Router } from 'express'
import * as BookController from '../controllers/book.controller'

const router = new Router()

router.route('/').get(BookController.getBooks)
router.route('/').post(BookController.createBook)
router.route('/trade/confirm').post(BookController.confirmTrade)

export default router
