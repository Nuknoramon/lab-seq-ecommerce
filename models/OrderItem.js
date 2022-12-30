module.exports = (sequelize, Datatypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      amount: {
        type: Datatypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      price: {
        type: Datatypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false,
      },
      discount: {
        type: Datatypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  OrderItem.associate = (db) => {
    OrderItem.belongsTo(db.Order, {
      foreignKey: {
        allowNull: false,
        name: "orderId",
      },
    });
    OrderItem.belongsTo(db.Product, {
      foreignKey: {
        allowNull: false,
        name: "productId",
      },
    });
  };
  return OrderItem;
};
