const Farmer = require('./farmer.model');

const save = async ({fullName,NIC,gender, address,province, district,  email, contactNumber, categories, hectare}) => {
    const farmer = await Farmer.create({
        fullName,
        NIC,
        gender,
        address,
        province,
        district,
        email,
        contactNumber,
        categories,
        hectare
    });
    console.log({fullName,NIC,gender, address,province, district,  email, contactNumber, categories, hectare});
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

const updateById = async (id, {fullName,NIC,gender, address,province, district,  email, contactNumber, categories, hectare}) => {
    const farmer = await Farmer.findByIdAndUpdate(id, {
        fullName,
        NIC,
        gender,
        address,
        province,
        district,
        email,
        contactNumber,
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