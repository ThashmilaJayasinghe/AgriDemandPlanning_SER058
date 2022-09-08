import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

// export const createSeedRequest = async (
//     { farmerId, category, type, sizeOfLand, weight, location },
//     setIsCreationSuccess
// ) => {
//     try {
//         await axios
//             .post(`${BACKEND_URL}/seed-request/create-seed-request`, {
//                 farmerId,
//                 category,
//                 type,
//                 sizeOfLand,
//                 weight,
//                 location,
//             })
//             .then((result) => {
//                 setIsCreationSuccess(result.data.success);
//             });
//     } catch (err) {
//         console.log(err);
//         setIsCreationSuccess(false);
//     }
// };

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
// export const deleteSeedRequest = async (requestId, setIsDeleteSuccess) => {
//     try {
//         await axios
//             .delete(`${BACKEND_URL}/seed-request/delete-seed-request`, { params: {requestId} })
//             .then((result) => {
//                 setIsDeleteSuccess(result.data.success);
//             });
//     } catch (err) {
//         console.log(err);
//         setIsDeleteSuccess(false);
//     }
// };
