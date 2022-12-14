const {save, getAll, getById,updateById, removeById, login, updateProfilePicById} = require("../dal/buyer/buyer.dao");


const createBuyer = async (req,res)=>{
    const {fullName,NIC,ShopName,gender, address,province, district,  email, contactNumber,userName,password,role} = req.body;
    try {
        if(!userName || !password){
           return res.status(400).json({
               success: false,
               msg:'Password and email are required'})
        }
        if(password.length<8){
            return res.status(400).json({
                success: false,
                msg: 'Password should be at least 8 characters long' })
        }

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
            userName,
            password,
            role
        });
       return res.status(201).json({msg:"New buyer added"},buyer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

const userLogin = async (req,res)=>{
    const {userName,password} = req.body;
    try {
        const user = await login({userName,password})
        return res.status(201).json(user);
    }catch (err){
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
    const {fullName,NIC,ShopName, gender, address,province, district,  email, contactNumber,profileImg} = req.body;
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
            profileImg
        });
        res.status(200).json(buyer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const updateBuyerProfile = async (req, res) => {
    const {profileImg} = req.body;
    try {
        const buyer = await updateProfilePicById(req.params.id, {
            profileImg
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
    deleteBuyer,
    userLogin,
    updateBuyerProfile
}