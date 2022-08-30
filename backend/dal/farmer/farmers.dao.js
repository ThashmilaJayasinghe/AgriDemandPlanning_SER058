const Farmer = require('./farmer.model');


const save = async ({name, address, email, categories, hectare}) => {
    const farmer = await Farmer.create({
        name,
        address,
        email,
        categories,
        hectare
    });
    console.log({name, address, email, categories, hectare});
    return farmer;
};

const getAll = async () => {
    const farmers =  await Farmer.find();
    return farmers;
};

const getById = async (id) => {
    const farmer = await Farmer.findById(id);
    return farmer;
};

const updateById = async (id, {name, address, email, categories, hectare}) => {
    const farmer = await Farmer.findByIdAndUpdate(id, {
        name,
        address,
        email,
        categories,
        hectare
    })
    return farmer;
};

const removeById = async (id) => {
    await Farmer.findByIdAndDelete(id)
};


module.exports = {
    save,
    getAll,
    getById,
    updateById,
    removeById,
}