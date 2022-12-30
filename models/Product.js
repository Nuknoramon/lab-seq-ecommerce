module.exports = (sequelize, Datatypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: Datatypes.STRING(45),
        allowNull: false,
      },
      desc: Datatypes.STRING,
      price: {
        type: Datatypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false,
      },
      quantity: {
        type: Datatypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  Product.associate = (db) => {
    Product.belongsTo(db.Supplier, {
      foreignKey: {
        allowNull: false,
        name: "supplierId",
      },
    });
    Product.hasMany(db.OrderItem, {
      foreignKey: {
        allowNull: false,
        name: "productId",
      },
    });
    Product.belongsToMany(db.Order, { through: "order_items" });
  };
  return Product;
};
