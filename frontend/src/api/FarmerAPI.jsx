import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

export const getFarmers = async (setFarmers) => {
    try {
        await axios
            .get(`${BACKEND_URL}/farmers`, {
            })
            .then((res) => {
                setFarmers(res.data);
            });
    } catch (err) {
        console.log(err);
        setFarmers([]);
    }
};


export const deleteFarmer = async (id) => {
    try {
        await axios
            .delete(`${BACKEND_URL}/farmers/` + id)
            .then((res) => {
            });
    } catch (err) {
        console.log(err);
    }
};

export const updateFarmer = async (id, farmer, setFarmer) => {
    try {
        await axios
            .put(`${BACKEND_URL}/farmers/` + id, farmer)
            .then((res) => {
                setFarmer(res.data);
            });
    } catch (err) {
        console.log(err);
    }
};

export const getFarmer = async (id, setFarmer) => {
    try {
        await axios
            .get(`${BACKEND_URL}/farmers/` + id)
            .then((res) => {
                setFarmer(res.data);
            });
    } catch (err) {
        console.log(err);
        setFarmer({});
    }
};
