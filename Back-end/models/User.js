module.exports=(sequelize,DataType)=>{
    const User=sequelize.define("User",{
        username:{
            type:DataType.STRING,
            allowNull:true
        },
        email:{
            type:DataType.STRING,
            allowNull:true
        },
        password:{
            type:DataType.STRING,
            allowNull:true
        },
        img:{
            type:DataType.STRING,
            allowNull:true
        },

    })

    User.associate=models=>{
        User.hasMany(models.Produit,{
           onDelete:"cascade"
     })
        User.hasMany(models.Order,{
            onDelete:"cascade"
        })

    }  

return User

} 