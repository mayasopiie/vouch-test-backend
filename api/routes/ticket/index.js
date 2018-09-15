const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.get)
router.post('/', controller.post)
router.delete('/:id', controller.delete)
router.put('/:id', controller.update)
router.post('/seed', controller.seed)
router.get('/status/:status', controller.getByStatus)

module.exports = router