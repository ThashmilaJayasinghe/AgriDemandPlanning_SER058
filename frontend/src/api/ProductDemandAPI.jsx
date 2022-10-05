import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

export const createProductDemand = async (
  { buyerID, category, type, sellings, unitPrice, remarks },
  setIsCreationSuccess
) => {
  try {
    await axios
      .post(`${BACKEND_URL}/seller/addDemand/${buyerID}`, {
        category,
        type,
        sellings,
        unitPrice,
        remarks
      })
      .then((result) => {
        setIsCreationSuccess(result.data.success);
      });
  } catch (err) {
    console.log(err);
    setIsCreationSuccess(false);
  }
};

export const updateProductDemand = async (
    { buyerID, category, type, sellings, unitPrice, remarks },
    setIsCreationSuccess
) => {
    try {
        await axios
            .put(`${BACKEND_URL}/seller/editDemand/${buyerID}`, {
                category,
                type,
                sellings,
                unitPrice,
                remarks
            })
            .then((result) => {
                setIsCreationSuccess(result.data.success);
            });
    } catch (err) {
        console.log(err);
        setIsCreationSuccess(false);
    }
};
