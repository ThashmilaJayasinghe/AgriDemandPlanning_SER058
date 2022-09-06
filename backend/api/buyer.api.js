const {save, getAll, getById,updateById, removeById} = require("../dal/buyer/buyer.dao");

const createBuyer = async (req,res)=>{
    const {fullName,NIC,ShopName,gender, address,province, district,  email, contactNumber} = req.body;
    try {
        const buyer = await save({
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
        res.status(201).json(buyer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

const getBuyers = async (req, res) => {
    try {
        const buyers = await getAll();
        res.status(200).json(buyers);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const getBuyer = async (req, res) => {
    try {
        const buyer = await getById(req.params.id);
        res.status(200).json(buyer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const updateBuyer = async (req, res) => {
    const {fullName,NIC,ShopName, gender, address,province, district,  email, contactNumber} = req.body;
    try {
        const buyer = await updateById(req.params.id, {
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
        res.status(200).json(buyer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const deleteBuyer = async (req, res) => {
    try {
        await removeById(req.params.id);
        res.status(200).json(req.params.id);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

module.exports = {
    createBuyer,
    getBuyers,
    getBuyer,
    updateBuyer,
    deleteBuyer
}