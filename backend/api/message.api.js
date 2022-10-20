const { saveMessage, receiveMessages, updateById } = require("../dal/message/message.dao");

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

const viewMessages = async (req, res) => {
    try {
        const messages = await receiveMessages(req.params.id);
        res.status(200).json(messages);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const updateMessage = async (req, res) => {
    const {recipientId, subject, creatorId, messageBody, parentMessageId, status} = req.body;
    try {
        const message = await updateById(req.params.id, {
            recipientId, subject, creatorId, messageBody, parentMessageId, status
        });
        res.status(200).json(message);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

module.exports = {
    createMessage,
    viewMessages,
    updateMessage,
};
