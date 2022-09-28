const Farmer = require('./farmer.model');
const bcrypt = require('bcrypt')

const save = async ({fullName,NIC,gender, address,province, district,  email, contactNumber,userName,password, categories, hectare}) => {
    const farmer = await Farmer({
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
        categories,
        hectare
    });
    bcrypt.hash(password,7, async (err,hash)=>{
        farmer.password = hash
        const newFarmer = await farmer.save()

        if(newFarmer){
            console.log({fullName,NIC,gender, address,province, district,  email, contactNumber,userName,password, categories, hectare});
            return farmer;
        }
    })
};

const getAll = async () => {
    const farmers =  await Farmer.find();
    return farmers;
};

const getById = async (id) => {
    const farmer = await Farmer.findById(id);
    return farmer;
};

const updateById = async (id, {fullName,NIC,gender, address,province, district,  email, contactNumber, categories, hectare, profileImg}) => {
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
        hectare,
        profileImg
    },{new: true})
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