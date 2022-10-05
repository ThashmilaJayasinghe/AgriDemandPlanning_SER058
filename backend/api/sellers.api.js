const { addProductDemand, getProductDemand,getOneProductDemand, deleteDemandByID, editProductDemand} = require("../dal/seller/seller.dao");

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

const editDemand = async (req, res) => {
  const buyerID = req.params.id;
  const { category, type, sellings, unitPrice, remarks } = req.body;

  try {
    const demand = await editProductDemand({
      buyerID,
      category,
      type,
      sellings,
      unitPrice,
      remarks,
    });

    res
        .status(201)
        .json({ success: true, data: demand, message: "Demand Edited" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Demand is not edited" });
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

const deleteDemand = async (req, res) => {
  const id = req.body.id;
  const demandID = req.body.demandID;

  try {
    const deletedDemand = await deleteDemandByID(id, demandID);
    if (deletedDemand) {
      res.status(200).json({
        success: true,
        message: "demand deleted",
        data: deletedDemand,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "demand delete is not succeede",
        data: deletedDemand,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

module.exports = {addDemand,getDemands,getOneDemand, deleteDemand};
