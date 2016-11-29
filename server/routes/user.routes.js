import { Router } from 'express'
import * as userController from '../controllers/user.controller'

const router = new Router()

router.route('/').get(userController.getUser)
router.route('/').patch(userController.updateShippingInfo)

export default router
