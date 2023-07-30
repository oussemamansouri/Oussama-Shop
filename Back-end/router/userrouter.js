const express=require('express')
const route=express.Router()
const db=require('../models')
const bcrypt=require('bcrypt')
const usercontroller=require('../controllers/user-controller')


route.post('/register',(req,res,next)=>{

usercontroller.register(req.body.username,req.body.email,req.body.password)
.then(response=>res.status(200).json(response))
.catch(err=>res.status(400).json(err))

})




route.post('/login',(req,res,next)=>{

  usercontroller.login(req.body.email,req.body.password)
  .then(response=>res.status(200).json({token:response}))
  .catch(err => {
    res.status(500).send({
      message: "invalid email and password"
    });
  })
})


route.get('/user/:id',(req,res,next)=>{
db.User.findOne({where:{id:req.params.id}})
.then((response)=>res.status(200).send(response))
.catch((err)=>res.status(400).send(err))
})

route.get('/users',(req,res,next)=>{
    db.User.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})






    
route.delete('/user/:id',(req, res) => {
    const id = req.params.id;
  
    db.User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  })
  

  




  module.exports=route