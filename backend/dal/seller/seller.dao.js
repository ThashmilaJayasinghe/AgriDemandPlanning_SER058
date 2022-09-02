const Demand = require("./demand.model");

const addProductDemand = async ({
  category,
  type,
  sellings,
  unitPrice,
  remarks,
}) => {
  const demand = await Demand.create({
    category,
    type,
    sellings,
    unitPrice,
    remarks,
  });

  console.log(demand);

  return demand;
};

module.exports = { addProductDemand };
