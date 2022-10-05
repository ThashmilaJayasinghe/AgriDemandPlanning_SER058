const Demand = require("./demand.model");
const SeedRequest = require("../seedRequest/request.model");

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

const editProductDemand = async ({buyerID, category, type, sellings, unitPrice, remarks}) => {
  try {
    let findDemanduyer = await Demand.findOne({buyerID});
    console.log(findDemanduyer);
      // const addADemand =({
      //   category, type, sellings, unitPrice, remarks
      // })
    // findDemanduyer.demands.push(addADemand);
    // findDemanduyer.save();
      return addADemand;
  }catch (err){
    console.log(err);
   }
};

const getProductDemand = async () =>{
  const demands = await Demand.find();
  return demands;
}

const getOneProductDemand = async (buyerID)=>{
  try{
    let demands = await Demand.findOne({buyerID})
    if(demands){
      return demands;
    }else {
      return null;
    }
  }catch (err){
    return err;
  }
}

const deleteDemandByID = async (id, demandID)=>{
  try {
    const removeDemand = await Demand.findOneAndUpdate({ buyerID: id},
        {
          $pull: {demands: {_id: demandID}},
        }
  );
    return removeDemand;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { addProductDemand , getProductDemand,getOneProductDemand, deleteDemandByID, editProductDemand};
