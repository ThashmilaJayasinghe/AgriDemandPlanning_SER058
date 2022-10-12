const Demand = require("./demand.model");
const SeedRequest = require("../seedRequest/request.model");

const addProductDemand = async ({
  buyerID,
  category,
  type,
  sellings,
  unitPrice,
  remarks,
}) => {
  try {
    let haveDemand = await Demand.findOne({ buyerID });
    console.log(haveDemand);

    if (haveDemand) {
      const addADemand = {
        category,
        type,
        sellings,
        unitPrice,
        remarks,
      };
      haveDemand.demands.push(addADemand);
      haveDemand.save();
      return addADemand;
    } else {
      const newDemand = await Demand.create({
        buyerID,
        demands: [
          {
            category,
            type,
            sellings,
            unitPrice,
            remarks,
          },
        ],
      });
      console.log(newDemand);
      return newDemand;
    }
  } catch (err) {
    console.log(err);
  }
};

const editProductDemand = async ({
  buyerID,
  demandID,
  category,
  type,
  sellings,
  unitPrice,
  remarks,
}) => {
  console.log(`Buyer ID received : ${buyerID}`);
  console.log(`Demand ID received : ${demandID}`);

  const updateDemand = {
    category,
    type,
    sellings,
    unitPrice,
    remarks,
  };

  const updated = await Demand.findOneAndUpdate(
    // { buyerID: buyerID, "demands._id": demandID },
    // { updateDemand }
    { buyerID: buyerID, "demands._id": demandID },
    {
      $set: {
        "demands.$.remarks": remarks,
        "demands.$.unitPrice": unitPrice,
        "demands.$.sellings": sellings,
      },
    }
  );
  return updated;
};

const getProductDemand = async () => {
  const demands = await Demand.find();
  return demands;
};

const getOneProductDemand = async (buyerID) => {
  try {
    let demands = await Demand.findOne({ buyerID });
    if (demands) {
      return demands;
    } else {
      return null;
    }
  } catch (err) {
    return err;
  }
};

const deleteDemandByID = async (id, demandID) => {
  try {
    const removeDemand = await Demand.findOneAndUpdate(
      { buyerID: id },
      {
        $pull: { demands: { _id: demandID } },
      }
    );
    return removeDemand;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  addProductDemand,
  getProductDemand,
  getOneProductDemand,
  deleteDemandByID,
  editProductDemand,
};
