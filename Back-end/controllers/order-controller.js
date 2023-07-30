const db=require('../models')


// create main Model



// 1. create Order

const addOrder= async (req, res) => {

    let info = {
        quantite: req.body.quantite,
        amount:req.body.amount,
        adress: req.body.adress,
        status:req.body.status,
    }
    const order = await db.Order.create(info)
    res.status(200).send(order)
    console.log(order)

}


// 2. get all Order

const getAllOrder = async (req, res) => {

    let order = await db.Order.findAll()
    res.status(200).send(order)
}

// 3. get single Order

const getOneOrder = async (req, res) => {

    let id = req.params.id
    let order = await db.Order.findOne({ where: {id:id}})
    res.status(200).send(order)

}

// 5. delete Order by id

const deleteOrder = (req, res) => {
    const id = req.params.id;
  
    db.Order.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Order with id=${id}. Maybe Produit was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Order with id=" + id
        });
      });
  };
  const updateOrder = async (req, res) => {

    db.Order.update({
        quantite: req.body.quantite,
        amount:req.body.amount,
        adress: req.body.adress,
        status:req.body.status,
  },{where:{id:req.params.id}})
  .then((response)=>res.status(200).send(response))
  .catch((err)=>res.status(400).send(err))
  
  };



module.exports = {
    addOrder,
    getAllOrder,
    getOneOrder,
    deleteOrder,
    updateOrder

    
    
}