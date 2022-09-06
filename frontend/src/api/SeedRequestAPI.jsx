import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

export const createSeedRequest = async (
  { farmerId, category, type, sizeOfLand, weight, location },
  setIsCreationSuccess
) => {
  try {
    await axios
      .post(`${BACKEND_URL}/seed-request/create-seed-request`, {
        farmerId,
        category,
        type,
        sizeOfLand,
        weight,
        location,
      })
      .then((result) => {
        setIsCreationSuccess(result.data.success);
      });
  } catch (err) {
    console.log(err);
    setIsCreationSuccess(false);
  }
};

// this function has some issues
export const viewFarmerSeedRequest = async (farmerId, setMyRequests) => {
  try {
    await axios
      .get(`${BACKEND_URL}/seed-request/view-seed-request`, {
        params: { farmerId },
      })
      .then((result) => {
        if (result.data.success === true) {
          setMyRequests(result.data.data);
        } else {
          setMyRequests([]);
        }
      });
  } catch (err) {
    console.log(err);
    setMyRequests([]);
  }
};
export const deleteSeedRequest = async (requestId, setIsDeleteSuccess) => {
  try {
    await axios
      .delete(`${BACKEND_URL}/seed-request/delete-seed-request`, { requestId })
      .then((result) => {
        setIsDeleteSuccess(result.data.success);
      });
  } catch (err) {
    console.log(err);
    setIsDeleteSuccess(false);
  }
};