const db = require("./models/index");
const {
  sequelize,
  Customer,
  Department,
  Supplier,
  Employee,
  Order,
  Product,
  OrderItem,
} = require("./models");

// db.sequelize.sync({ alter: true });
// db.Customer.create({ name: "กบ", address: "Bangkok" });

const run = async () => {
  // const data = await Order.findAll({
  //   include: [
  //     {
  //       model: Employee,
  //       include: Department,
  //     },
  //     Customer,
  //   ],
  // });

  const data = await Customer.findAll({ include: Employee });
  console.log(JSON.stringify(data, null, 2));
};

run();
