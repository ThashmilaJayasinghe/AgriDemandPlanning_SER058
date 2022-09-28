const {
  addSeedRequest,
  retrieveFarmerRequests,
  removeSeedRequest,
  editSeedRequest,
} = require("../dal/seedRequest/request.dao");

const createSeedRequest = async (req, res) => {
  const { farmerId, category, type, sizeOfLand, weight, location } = req.body;

  try {
    const request = await addSeedRequest({
      farmerId,
      category,
      type,
      sizeOfLand,
      weight,
      location,
    });

    if (request) {
      res.status(201).json({
        success: true,
        message: "Seed request added",
        data: request,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Seed request is not added",
        data: request,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Seed request is not added",
      data: err,
    });
  }
};

const viewFarmerSeedRequests = async (req, res) => {
  const { farmerId } = req.query;

  try {
    const requests = await retrieveFarmerRequests(farmerId);

    if (requests.length > 0) {
      res.status(200).json({
        success: true,
        message: "Seed request retrieved",
        data: requests,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "No seed requests found for the farmer",
        data: requests,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

const updateSeedRequest = async (req, res) => {
  const {RequestId, farmerId, category, type, sizeOfLand, weight, location } = req.body;

  try {
    const request = await editSeedRequest({
      RequestId,
      farmerId,
      category,
      type,
      sizeOfLand,
      weight,
      location,
    });

    if (request) {
      res.status(201).json({
        success: true,
        message: "Seed request updated",
        data: request,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Seed request is not updated",
        data: request,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Seed request is not updated",
      data: err,
    });
  }
};

const deleteSeedRequest = async (req, res) => {
  const { requestId } = req.query;

  try {
    const deletedRequest = await removeSeedRequest({ requestId });

    if (deletedRequest) {
      res.status(200).json({
        success: true,
        message: "Seed request deleted",
        data: deletedRequest,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Seed request delete is not succeede",
        data: deletedRequest,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

module.exports = {
  createSeedRequest,
  viewFarmerSeedRequests,
  deleteSeedRequest,
  updateSeedRequest
};
