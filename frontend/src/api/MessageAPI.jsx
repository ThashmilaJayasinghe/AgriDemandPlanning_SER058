import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

export const createMessage = async ({ recipientId, subject, creatorId, messageBody, parentMessageId, status }, setIsSuccess) => {
    try {
        await axios
            .post(`${BACKEND_URL}/message`, {
                recipientId,
                subject,
                creatorId,
                messageBody,
                parentMessageId,
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
