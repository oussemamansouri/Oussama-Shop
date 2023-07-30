module.exports = (sequelize, DataType) => {
    const Order = sequelize.define("Order", {
        quantite: {
            type: DataType.STRING,
            allowNull: true
        },
        amount: {
            type: DataType.STRING,
            allowNull: true
        },
        adress: {
            type: DataType.STRING,
            allowNull: true
        },
        status: {
            type: DataType.STRING,
            allowNull: true
        },




    })

    Order.associate = models => {
        Order.belongsTo(models.User, {
           onDelete: "cascade"
        })

        Order.belongsTo(models.Produit,{
            onDelete:"cascade"
        })

    }

    return Order
}