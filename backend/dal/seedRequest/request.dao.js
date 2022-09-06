const SeedRequest = require("./request.model");

const addSeedRequest = async ({
  farmerId,
  category,
  type,
  sizeOfLand,
  weight,
  location,
}) => {
  try {
    const newRequest = await SeedRequest.create({
      farmerId,
      category,
      type,
      sizeOfLand,
      weight,
      location,
    });

    return newRequest;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const retrieveFarmerRequests = async (farmerId) => {
    console.log(farmerId)

  try {
    const farmerRequests = await SeedRequest.find( {farmerId: farmerId} );
    console.log(farmerRequests)
    return farmerRequests;
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

module.exports = { addSeedRequest, retrieveFarmerRequests, removeSeedRequest };
