const Crop = require("./crop.model");

const addCrop = async ({ category, type, supply, demand }) => {
  try {
    const cropType = { name: type, supply: supply, demand: demand };
    console.log(cropType);

    const crop = await Crop.find({ category: category });

    if (crop.length === 0) {
      const newCrop = await Crop.create({
        category,
        types: cropType,
      });

      return newCrop;
    } else {
      const newCrop = await Crop.findOneAndUpdate(
        { category: category },
        { $push: { types: cropType } },
        { new: true }
      );

      return newCrop;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getAllCrops = async () => {
  const crops = await Crop.find();
  return crops;
};

const addDemandForCrop = async ({ category, type, demand }) => {

  try {
    const crop = await Crop.find({ category: category });

    if (crop.length === 0) {
      console.log("No Categories matches");
      return null;
    } else {
      const typeExists = await Crop.findOne({
        category: category,
        "types.name": type,
      });

      if (typeExists) {
        let previousDemand = 0;

        typeExists.types.map((item, index) => {
          if (item.name == type) {
            previousDemand = item.demand;
          }
        });

        const updatedCrop = await Crop.findOneAndUpdate(
          { category: category, "types.name": type },
          { $set: { "types.$.demand": demand + previousDemand } }
        );

        return updatedCrop;
      } else {
        console.log("No types matches");
        return null;
      }
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports = { addCrop, getAllCrops, addDemandForCrop };
