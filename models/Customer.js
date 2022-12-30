module.exports = (sequelize, Datatypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      name: {
        type: Datatypes.STRING(45),
        allowNull: false,
      },
      address: Datatypes.STRING(45),
    },
    {
      timestamps: false,
    }
  );

  Customer.associate = (db) => {
    Customer.hasMany(db.Order, {
      foreignKey: {
        allowNull: false,
        name: "customerId",
      },
    });
    Customer.belongsToMany(db.Employee, {
      through: db.Order,
      foreignKey: {
        allowNull: false,
        name: "customerId",
      },
      otherKry: {
        allowNull: false,
        name: "employeeId",
      },
    });
  };
  return Customer;
};
