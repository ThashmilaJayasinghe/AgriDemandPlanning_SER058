import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

export const createCropType = async (
    { category, type, supply, demand },
    setIsCreationSuccess
) => {
    try {
        await axios
            .post(`${BACKEND_URL}/crops/`, {
                category,
                type,
                supply,
                demand
            })
            .then((result) => {
                setIsCreationSuccess(result.data.success);
            });
    } catch (err) {
        console.log(err);
        setIsCreationSuccess(false);
    }
};


export const getCropTypes = async (setCrops) => {

    try {
        const crops = await axios
            .get(`${BACKEND_URL}/crops/`, {
            });

        setCrops(crops);

    } catch (err) {
        console.log(err);
        setCrops([]);
    }
};