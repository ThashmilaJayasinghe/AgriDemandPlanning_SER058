const express = require("express");
const {
  createSeedRequest,
  viewFarmerSeedRequests,
  deleteSeedRequest,
  updateSeedRequest,
} = require("../api/seedRequest.api");
const router = express.Router();

router.post("/create-seed-request", createSeedRequest);
router.get("/view-seed-request", viewFarmerSeedRequests);
router.put("/update-seed-request", updateSeedRequest);
router.delete("/delete-seed-request", deleteSeedRequest);

module.exports = router;
