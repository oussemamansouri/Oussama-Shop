const db=require('../models')

const multer = require('multer')
const path = require('path')

// create main Model



// 1. create Produit

const addProduit= async (req, res) => {

    let info = {
        titre: req.body.titre,
        descreption:req.body.descreption,
        img: req.file.path,
        categorie:req.body.categorie,
        size:req.body.size,
        color:req.body.color,
        prix:req.body.prix,
        instock:req.body.instock,
        UserId :req.body.UserId
    }
    const produit = await db.Produit.create(info)
    res.status(200).send(produit)
    console.log(produit)

}


// 2. get all Produits

const getAllProduit = async (req, res) => {

    let produit = await db.Produit.findAll()
    res.status(200).send(produit)
}

// 3. get single Produit

const getOneProduit = async (req, res) => {

    let id = req.params.id
    let produit = await db.Produit.findOne({ where: {id:id}})
    res.status(200).send(produit)

}

// 5. delete Produit by id

const deleteProduit = (req, res) => {
    const id = req.params.id;
  
    db.Produit.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Produit was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Produit with id=${id}. Maybe Produit was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Produit with id=" + id
        });
      });
  };
  const updateproduit = async (req, res) => {

    db.Produit.update({
      titre: req.body.titre,
      descreption:req.body.descreption,
      categorie:req.body.categorie,
      size:req.body.size,
      color:req.body.color,
      prix:req.body.prix,
      instock:req.body.instock
  },{where:{id:req.params.id}})
  .then((response)=>res.status(200).send(response))
  .catch((err)=>res.status(400).send(err))
  
  };

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('img')

module.exports = {
    upload,
    addProduit,
    getAllProduit,
    getOneProduit,
    deleteProduit,
    updateproduit

    
    

}