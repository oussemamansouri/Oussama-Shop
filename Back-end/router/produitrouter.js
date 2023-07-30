
const produitController = require('../controllers/produit-controller')


// router
const router = require('express').Router()


// use routers
router.post('/addproduit',produitController.upload,produitController.addProduit)
router.get('/getAllproduit', produitController.getAllProduit)
router.get('/getOneproduit/:id', produitController.getOneProduit)
router.delete('/deleteproduit/:id', produitController.deleteProduit)
router.patch('/updateproduit/:id',produitController.upload,produitController.updateproduit)

  
    

  



module.exports = router