const Buyer = require('./buyer.model')

const save = async ({fullName,NIC,ShopName,gender, address,province, district,  email, contactNumber}) => {
    const buyer = await Buyer.create({
        fullName,
        NIC,
        ShopName,
        gender,
        address,
        province,
        district,
        email,
        contactNumber,
    });
    console.log({fullName,NIC,ShopName,gender, address,province, district,  email, contactNumber});
    return buyer;
};

const getAll = async () => {
    const buyers =  await Buyer.find();
    return buyers;
};

const getById = async (id) => {
    const buyer = await Buyer.findById(id);
    return buyer;
};

const updateById = async (id, {fullName,NIC,ShopName,gender, address,province, district,  email, contactNumber}) => {
    const buyer = await Buyer.findByIdAndUpdate(id, {
        fullName,
        NIC,
        ShopName,
        gender,
        address,
        province,
        district,
        email,
        contactNumber
    })
    return buyer;
};

const removeById = async (id) => {
    await Buyer.findByIdAndDelete(id)
};


module.exports = {
    save,
    getAll,
    getById,
    updateById,
    removeById,
}