const { save, getAll, getById, updateById, removeById } = require('../dal/farmer/farmers.dao');


const createFarmer = async (req, res) => {
    console.log(req.body);
    const{name, address, email, categories, hectare} = req.body;
    console.log(name, address, email, categories, hectare);
    try {
        const farmer = await save({
            name,
            address,
            email,
            categories: [categories],
            hectare
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
    const {name, address, email, categories, hectare} = req.body;
    try {
        const farmer = await updateById(req.params.id, {
            name,
            address,
            email,
            categories,
            hectare
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
};