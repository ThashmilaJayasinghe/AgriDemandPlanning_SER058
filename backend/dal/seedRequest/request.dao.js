const SeedRequest = require("./request.model");
const Farmer = require("../farmer/farmer.model");

const addSeedRequest = async ({
  farmerId,
  category,
  type,
  sizeOfLand,
  weight,
  location,
  status,
}) => {
  try {
    const newRequest = await SeedRequest.create({
      farmerId,
      category,
      type,
      sizeOfLand,
      weight,
      location,
      status,
    });

    return newRequest;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const retrieveFarmerRequests = async (farmerId) => {
  try {
    const farmerRequests = await SeedRequest.find({ farmerId: farmerId });
    return farmerRequests;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const editSeedRequest = async ({
  RequestId,
  farmerId,
  category,
  type,
  sizeOfLand,
  weight,
  location,
}) => {
  try {
    const updatedRequest = await SeedRequest.findByIdAndUpdate(RequestId, {
      farmerId,
      category,
      type,
      sizeOfLand,
      weight,
      location,
    });

    return updatedRequest;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const removeSeedRequest = async ({ requestId }) => {
  try {
    const removedRequest = await SeedRequest.findByIdAndDelete(requestId);
    return removedRequest;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getAllSeedRequests = async () => {
  const requests = await SeedRequest.find();
  return requests;
};

const updateSeedRequestStatus = async (
  id,
  { farmerId, category, type, sizeOfLand, weight, location, status }
) => {
  try {
    const request = await SeedRequest.findByIdAndUpdate(
      id,
      {
        farmerId,
        category,
        type,
        sizeOfLand,
        weight,
        location,
        status,
      },
      { new: true }
    );

    return request;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  addSeedRequest,
  retrieveFarmerRequests,
  editSeedRequest,
  removeSeedRequest,
  getAllSeedRequests,
  updateSeedRequestStatus,
};
