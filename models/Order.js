module.exports = (sequelize, Datatypes) => {
  const Order = sequelize.define(
    "Order",
    {
      date: {
        type: Datatypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  Order.associate = (db) => {
    Order.belongsTo(db.Employee, {
      foreingKey: "employeeId",
    });
    Order.belongsTo(db.Customer, {
      foreignKey: {
        allowNull: false,
        name: "customerId",
      },
    });
    Order.hasMany(db.OrderItem, {
      foreignKey: {
        allowNull: false,
        name: "orderId",
      },
    });
    Order.belongsToMany(db.Product, { through: db.OrderItem });
  };
  return Order;
};
