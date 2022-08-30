const { save, getAll, getById, updateById, removeById } = require('../dal/farmer/farmers.dao');


const createFarmer = async ({name, address, email, categories, hectare}) => {
    const farmer = await save({
        name,
        address,
        email,
        categories,
        hectare
    });
    return farmer;
};

const getFarmers = async () => {
    const farmers = await getAll();
    return farmers;
};

const getFarmer = async (id) => {
    const farmer = await getById(id);
    return farmer;
};

const updateFarmer = async (id, {name, address, email, categories, hectare}) => {
    const farmer = await updateById(id, {
        name,
        address,
        email,
        categories,
        hectare
    });
    return farmer
};

const deleteFarmer = async (id) => {
    await removeById(id);
};


module.exports = {
    createFarmer,
    getFarmers,
    getFarmer,
    updateFarmer,
    deleteFarmer,
};