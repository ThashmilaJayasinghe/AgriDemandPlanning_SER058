import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api/message";

export const createMessage = async ({ recipientId, subject, creatorId, messageBody, status }, setIsSuccess) => {
    try {
        await axios
            .post(`${BACKEND_URL}`, {
                recipientId,
                subject,
                creatorId,
                messageBody,
                status,
            })
            .then((res) => {
                setIsSuccess(res.data.success);
            });
    } catch (err) {
        console.log(err);
        setIsSuccess(false);
    }
};


