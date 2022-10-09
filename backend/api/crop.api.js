const { addCrop, getAllCrops } = require("../dal/crop/crops.dao");

const createCrop = async (req, res) => {

    const { category, type, supply, demand } = req.body;

    try {
        const crop = await addCrop({
            category,
            type,
            supply,
            demand
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


module.exports = {
    createCrop,
    getCrops
};
