const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Supplier = sequelize.define(
    "Supplier",
    {
      name: {
        type: Datatypes.STRING(45),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(145),
        allowNull: false,
      },
      phoneNumber: {
        type: Datatypes.STRING(45),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  Supplier.associate = (db) => {
    Supplier.hasMany(db.Product, {
      foreingKey: {
        allowNull: false,
        name: "supplierId",
      },
    });
  };
  return Supplier;
};
