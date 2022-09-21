const express = require("express");
const {createSeedRequest, viewFarmerSeedRequests, deleteSeedRequest, getSeedRequests} = require("../api/seedRequest.api");
const router = express.Router();

router.post("/create-seed-request", createSeedRequest);
router.get('/view-seed-request', viewFarmerSeedRequests)
// router.put("/update-seed-request");
router.delete("/delete-seed-request", deleteSeedRequest);
router.get("/all", getSeedRequests);

module.exports = router;
