const { saveMessage } = require("../dal/message/message.dao");

const createMessage = async (req, res) => {
    const {recipientId, subject, creatorId, messageBody, parentMessageId, status} = req.body;

    try {
        const message = await saveMessage({
            recipientId,
            subject,
            creatorId,
            messageBody,
            parentMessageId,
            status,
        });

        if (message) {
            res.status(201).json({
                success: true,
                message: "Message created",
                data: message,
            });
        } else {
            res.status(500).json({
                success: false,
                message: "Message not created",
                data: message,
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Message not created",
            data: err,
        });
    }
};

// const viewFarmerSeedRequests = async (req, res) => {
//     const { farmerId } = req.query;
//
//     try {
//         const requests = await retrieveFarmerRequests(farmerId);
//
//         if (requests.length > 0) {
//             res.status(200).json({
//                 success: true,
//                 message: "Seed request retrieved",
//                 data: requests,
//             });
//         } else {
//             res.status(500).json({
//                 success: false,
//                 message: "No seed requests found for the farmer",
//                 data: requests,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             message: "Something went wrong",
//             data: err,
//         });
//     }
// };
//
// const deleteSeedRequest = async (req, res) => {
//     const { requestId } = req.query;
//
//     try {
//         const deletedRequest = await removeSeedRequest({ requestId });
//
//         if (deletedRequest) {
//             res.status(200).json({
//                 success: true,
//                 message: "Seed request deleted",
//                 data: deletedRequest,
//             });
//         } else {
//             res.status(200).json({
//                 success: false,
//                 message: "Seed request delete is not succeede",
//                 data: deletedRequest,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             message: "Something went wrong",
//             data: err,
//         });
//     }
// };
//
// const getSeedRequests = async (req, res) => {
//     try {
//         const requests = await getAllSeedRequests();
//         res.status(200).json(requests);
//     } catch (err) {
//         console.log(err);
//         res.json(err);
//     }
// };
//
// const updateRequest = async (req, res) => {
//     const { farmerId, category, type, sizeOfLand, weight, location, status } = req.body;
//
//     console.log('statusss: ', status)
//
//     try {
//         const request = await updateSeedRequest(req.params.id, {
//             farmerId,
//             category,
//             type,
//             sizeOfLand,
//             weight,
//             location,
//             status,
//         });
//
//         if (request) {
//             res.status(200).json({
//                 success: true,
//                 message: "Seed request updated",
//                 data: request,
//             });
//         } else {
//             res.status(500).json({
//                 success: false,
//                 message: "Seed request not updated",
//                 data: request,
//             });
//         }
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: "Seed request not updated",
//             data: err,
//         });
//     }
// };

module.exports = {
    createMessage,
};
