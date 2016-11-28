import { Router } from 'express'
import * as shipments from '../controllers/shipments.controller'

const router = new Router()

router.route('/').get(shipments.getUsersPendingShipments)

export default router
