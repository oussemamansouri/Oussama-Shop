module.exports=(sequelize,DataType)=>{
    const Produit=sequelize.define("Produit",{
        titre:{
            type:DataType.STRING,
            allowNull:true
        },
        descreption:{
            type:DataType.STRING,
            allowNull:true
        },
        img:{
            type:DataType.STRING,
            allowNull:true
        },
        categorie:{
            type:DataType.STRING,
            allowNull:true
        },
        size:{
            type:DataType.STRING,
            allowNull:true
        },
        color:{
            type:DataType.STRING,
            allowNull:true
        },
        prix:{
            type:DataType.STRING,
            allowNull:true
        },
        instock:{
            type:DataType.STRING,
            allowNull:true
        },



    })

    Produit.associate=models=>{
         Produit.belongsTo(models.User,{
            onDelete:"cascade"
        })

        Produit.hasMany(models.Order,{
        onDelete:"cascade"
     })
  
     }

return Produit
}