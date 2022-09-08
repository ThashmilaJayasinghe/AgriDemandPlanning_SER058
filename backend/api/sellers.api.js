const { addProductDemand, getProductDemand,getOneProductDemand} = require("../dal/seller/seller.dao");

const addDemand = async (req, res) => {
  const buyerID = req.params.id;
  const { category, type, sellings, unitPrice, remarks } = req.body;

  try {
    const demand = await addProductDemand({
      buyerID,
      category,
      type,
      sellings,
      unitPrice,
      remarks,
    });

    res
      .status(201)
      .json({ success: true, data: demand, message: "Demand added" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Demand is not added" });
  }
};

const getDemands = async (req,res) => {
  try {
    const demands = await getProductDemand();
    res.status(200).json(demands);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

const getOneDemand = async (req,res)=>{
  const buyerID = req.params.id;
  try {
    const demands = await getOneProductDemand(buyerID);
    res.status(200).json(demands)
  }catch (err){
    console.log(err);
    res.json(err);
  }
}

module.exports = {addDemand,getDemands,getOneDemand};
