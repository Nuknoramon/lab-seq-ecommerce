const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Department = sequelize.define(
    "Department",
    {
      name: {
        type: Datatypes.STRING(45),
        allowNull: false,
        unique: true,
      },
      budget: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: "0.00",
      },
    },
    {
      timestamps: false,
    }
  );
  Department.associate = (db) => {
    Department.hasMany(db.Employee, {
      foreingKey: {
        allowNull: false,
        name: "departmentId",
      },
    });
  };
  return Department;
};
