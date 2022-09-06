const Demand = require("./demand.model");

const addProductDemand = async ({buyerID, category, type, sellings, unitPrice, remarks}) => {
  try {
    let haveDemand = await Demand.findOne({buyerID});
console.log(haveDemand);

    if(haveDemand){
      const addADemand =({
        category, type, sellings, unitPrice, remarks
      })
      haveDemand.demands.push(addADemand);
      haveDemand.save();
      return addADemand;
    }else {
      const newDemand = await Demand.create({
        buyerID,
        demands:[{
          category,
          type,
          sellings,
          unitPrice,
          remarks
        }
        ]
      });
      console.log(newDemand);
      return newDemand;
    }
  }catch (err){
    console.log(err);
  }

};

module.exports = { addProductDemand };
