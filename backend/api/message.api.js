const { saveMessage, receiveMessages, viewMessage } = require("../dal/message/message.dao");

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

module.exports = {
    createMessage,
};
