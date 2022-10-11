const { addDemandForCrop } = require("../dal/crop/crops.dao");
const {
  addProductDemand,
  getProductDemand,
  getOneProductDemand,
} = require("../dal/seller/seller.dao");

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

    // update total demand in Crops
    if (demand) {
      const cropDemand = await addDemandForCrop({
        category,
        type,
        demand: Number(sellings),
      });

      if (cropDemand) {
        res.status(201).json({
          success: true,
          message: "New demand added and Crop demand updated",
          data: cropDemand,
        });
      } else {
        res.status(201).json({
          success: false,
          message: "New demand added but Crop demand is not updated",
          data: demand,
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: "Demand and Crop demand are not added",
        data: null,
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Demand is not added and not crop demand updated",
        data: null,
      });
  }
};

const getDemands = async (req, res) => {
  try {
    const demands = await getProductDemand();
    res.status(200).json(demands);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

const getOneDemand = async (req, res) => {
  const buyerID = req.params.id;
  try {
    const demands = await getOneProductDemand(buyerID);
    res.status(200).json(demands);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

module.exports = { addDemand, getDemands, getOneDemand };
