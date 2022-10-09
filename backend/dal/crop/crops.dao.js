const Crop = require("./crop.model");

const addCrop = async ({category, type, supply, demand}) => {
    try {

        const cropType = { name: type , supply: supply, demand: demand };
        console.log(cropType);

        const crop = await Crop.find( {category: category} );
        console.log(crop);

        if(crop.length === 0) {

            const newCrop = await Crop.create({
                category,
                types: cropType
            });

            return newCrop;

        } else {

            const newCrop = await Crop.findOneAndUpdate(
                { category: category },
                { $push: { types: cropType } },
                {new: true}
            );

            return newCrop;
        }

    } catch (err) {
        console.log(err);
        return err;
    }
};


const getAllCrops = async () => {
    const crops =  await Crop.find();
    return crops;
};



module.exports = { addCrop, getAllCrops };
