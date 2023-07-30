const orderController = require('../controllers/order-controller')


// router
const router = require('express').Router()


// use routers
router.post('/addorder', orderController.addOrder)
router.get('/getAllorder', orderController.getAllOrder)
router.get('/getOneorder/:id', orderController.getOneOrder)
router.delete('/deleteorder/:id', orderController.deleteOrder)
router.patch('/updateorder/:id',orderController.updateOrder)

  
    

  



module.exports = router