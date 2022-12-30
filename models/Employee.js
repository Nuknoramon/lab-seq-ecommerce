const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      name: {
        type: Datatypes.STRING(45),
        allowNull: false,
      },
      address: DataTypes.STRING(145),
      salary: Datatypes.DECIMAL(10, 2),
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  Employee.associate = (db) => {
    Employee.belongsTo(db.Department, {
      foreingKey: {
        allowNull: false,
        name: "departmentId",
      },
    });

    Employee.hasMany(db.Order, {
      foreingKey: "employeeId",
    });

    Employee.belongsToMany(db.Customer, {
      through: db.Order,
      foreingKey: {
        allowNull: false,
        name: "employeeId",
      },
    });
  };
  return Employee;
};
