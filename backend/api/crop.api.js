const {
  addCrop,
  getAllCrops,
  addDemandForCrop,
  addSupplyForCrop,
} = require("../dal/crop/crops.dao");

const createCrop = async (req, res) => {
  const { category, type, supply, demand } = req.body;

  try {
    const crop = await addCrop({
      category,
      type,
      supply,
      demand,
    });

    if (crop) {
      res.status(201).json({
        success: true,
        message: "New crop type added",
        data: crop,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Crop type is not added",
        data: crop,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Crop type is not added",
      data: err,
    });
  }
};

const getCrops = async (req, res) => {
  try {
    const crops = await getAllCrops();
    res.status(200).json(crops);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

const updateDemandForCrop = async (req, res) => {
  try {
    const { category, type, demand } = req.body;
    const cropDemand = await addDemandForCrop({
      category,
      type,
      demand,
    });

    if (cropDemand) {
      res.status(201).json({
        success: true,
        message: "Crop demand updated",
        data: cropDemand,
      });
    } else {
      console.log("Something went wrong!");
      res.status(500).json({
        success: false,
        message: "Crop demand is not updated",
        data: cropDemand,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      message: "Crop demand is not updated",
      data: err,
    });
  }
};

const updateSupplyForCrop = async (req, res) => {
  try {
    const { category, type, supply } = req.body;
    const cropSupply = await addSupplyForCrop({
      category,
      type,
      supply,
    });

    if (cropSupply) {
      res.status(201).json({
        success: true,
        message: "Crop supply updated",
        data: cropSupply,
      });
    } else {
      console.log("Something went wrong!");
      res.status(500).json({
        success: false,
        message: "Crop supply is not updated",
        data: cropSupply,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      message: "Crop supply is not updated",
      data: err,
    });
  }
};

module.exports = {
  createCrop,
  getCrops,
  updateDemandForCrop,
  updateSupplyForCrop
};
