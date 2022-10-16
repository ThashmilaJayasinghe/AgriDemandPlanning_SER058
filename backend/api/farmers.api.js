const { save, getAll, getById, updateById, removeById, updateProfilePicById} = require('../dal/farmer/farmers.dao');


const createFarmer = async (req, res) => {
    console.log(req.body);
    const{fullName,NIC,gender, address,province, district,  email, contactNumber,   userName, password, categories, hectare,role} = req.body;
    console.log(fullName,NIC,gender, address,province, district,  email, contactNumber, categories, hectare);
    try {
        if(!userName || !password){
            return res.status(400).json({msg:'Password and email are required'})
        }
        if(password.length<8){
            return res.status(400).json({ msg: 'Password should be at least 8 characters long' })
        }
        const farmer = await save({
            fullName,
            NIC,
            gender,
            address,
            province,
            district,
            email,
            contactNumber,
            userName,
            password,
            categories: [categories],
            hectare,
            role
        });
        res.status(201).json(farmer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const getFarmers = async (req, res) => {
   try {
       const farmers = await getAll();
       res.status(200).json(farmers);
   } catch (err) {
       console.log(err);
       res.json(err);
   }
};

const getFarmer = async (req, res) => {
    try {
        const farmer = await getById(req.params.id);
        res.status(200).json(farmer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const updateFarmer = async (req, res) => {
    const {fullName,NIC,gender, address,province, district,  email, contactNumber, categories, hectare,userName,password, profileImg} = req.body;
    try {
        const farmer = await updateById(req.params.id, {
            fullName,
            NIC,
            gender,
            address,
            province,
            district,
            email,
            contactNumber,
            categories,
            hectare,
            userName,
            password,
            profileImg
        });
        res.status(200).json(farmer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const updateFarmerProfile = async (req, res) => {
    const profileImg = req.body.url;
    console.log(`Image URl ${profileImg}`)
    try {
        const farmer = await updateProfilePicById(req.params.id, {
            profileImg
        });
        res.status(200).json(farmer);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const deleteFarmer = async (req, res) => {
    try {
        await removeById(req.params.id);
        res.status(200).json(req.params.id);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

module.exports = {
    createFarmer,
    getFarmers,
    getFarmer,
    updateFarmer,
    deleteFarmer,
    updateFarmerProfile
};