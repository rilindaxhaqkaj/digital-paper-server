import express from 'express'

import {
	getStatus,
	getStatus1,
	getStatus2,
} from '../controllers/exampleController.js'

const router = express.Router()

router.get('/status', getStatus)
router.get('/status/1', getStatus1)
router.get('/status/2', getStatus2)

export default router
