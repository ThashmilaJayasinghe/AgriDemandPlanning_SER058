const Message = require('./message.model');
const Recipient = require('./recipient.model');
const Farmer = require("../farmer/farmer.model");


const saveMessage = async ({recipientId, subject, creatorId, messageBody, parentMessageId, status}) => {

    try {
        const message = await Message.create({
            subject,
            creatorId,
            recipientId,
            messageBody,
            parentMessageId,
            status,
        });

        const messageId = message._id;

        const recipient = await Recipient.create({
            recipientId,
            messageId,
        });

        return([message, recipient]);

    } catch (err) {
        console.log(err);
        return err;
    }
};

const receiveMessages = async (id) => {

    const messages = await Message.find({recipientId: id}) ;
    // console.log(messages);
    return messages;
};

const updateById = async (id, {recipientId, subject, creatorId, messageBody, parentMessageId, status}) => {
    const message = await Message.findByIdAndUpdate(id, {
        recipientId,
        subject,
        creatorId,
        messageBody,
        parentMessageId,
        status
    },{new: true})
    return message;
};


module.exports = {
    saveMessage,
    receiveMessages,
    updateById,
}