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

export const getSuggestions = async (id, seSuggestions) => {
    try {
        await axios
            .get(`${BACKEND_URL}/` + id, {
            })
            .then((res) => {
                console.log(res.data);
                seSuggestions(res.data);
            });
    } catch (err) {
        console.log(err);
        seSuggestions([]);
    }
};

