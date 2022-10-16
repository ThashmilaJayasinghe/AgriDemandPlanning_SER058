const Buyer = require("./buyer.model");
const Farmer = require("../farmer/farmer.model")
const Admin = require('../admin/admin.model')
const bcrypt = require("bcrypt");

const save = async ({
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
}) => {
  const buyer = await Buyer({
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
    role:"Buyer"
  });

  bcrypt.hash(password, 7, async (err, hash) => {
    buyer.password = hash;
    const newBuyer = await buyer.save();

    if (newBuyer) {
      console.log({
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
      return buyer;
    }
  });
};

const login = async ({userName,password}) => {
  const buyer = await Buyer.findOne({userName:userName})
  const farmer = await Farmer.findOne({userName:userName})
  const admin = await Admin.findOne({userName:userName})

  if(buyer){
    if(bcrypt.compareSync(password, buyer.password) === true){
      console.log("matches")
      return [true, {user:buyer}]
    }
    else{
      console.log("mis-matches")
      return [false, {user: null}]
    }
  }else if(farmer){
    if(bcrypt.compareSync(password, farmer.password) === true){
      console.log("matches")
      return [true, {user:farmer}]
    }
    else{
      console.log("mis-matches")
      return [false, {user: null}]
    }
  }else if(admin) {
    if (bcrypt.compareSync(password, admin.password) === true) {
      console.log("matches")
      return [true, {user: admin}]
    } else {
      console.log("mis-matches")
      return [false, {user: null}]
    }
  }
  else{
    return [false, {user: null}]
  }
}


const getAll = async () => {
  const buyers = await Buyer.find();
  return buyers;
};

const getById = async (id) => {
  const buyer = await Buyer.findById(id);
  return buyer;
};

const updateById = async (
  id,
  {
    fullName,
    NIC,
    ShopName,
    gender,
    address,
    province,
    district,
    email,
    contactNumber,
    profileImg,
  }
) => {
  const buyer = await Buyer.findByIdAndUpdate(id, {
    fullName,
    NIC,
    ShopName,
    gender,
    address,
    province,
    district,
    email,
    contactNumber,
    profileImg,
  });
  return buyer;
};

const removeById = async (id) => {
  await Buyer.findByIdAndDelete(id);
};

const updateProfilePicById = async (id, {profileImg}) => {
  const buyer = await Buyer.findByIdAndUpdate(id, {
    profileImg
  },{new: true})
  return buyer;
};

module.exports = {
  save,
  getAll,
  getById,
  updateById,
  removeById,
  login,
  updateProfilePicById
};
