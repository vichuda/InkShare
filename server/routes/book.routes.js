import { Router } from 'express'
import * as BookController from '../controllers/book.controller'

const router = new Router()

router.route('/').get(BookController.getBooks)
router.route('/').post(BookController.createBook)
router.route('/').delete(BookController.deleteBook)
router.route('/trade/request').post(BookController.createTradeRequest)
router.route('/trade/request').put(BookController.confirmTrade)
router.route('/trade/request').delete(BookController.declineTrade)
router.route('/trade/request').get(BookController.getTradeRequests)

export default router
