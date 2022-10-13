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

    const messages = await Message.find({recipent}) ;
    console.log(messages);
    // return messages;
};

const viewMessage = async () => {

};

module.exports = {
    saveMessage,
    receiveMessages,
    viewMessage,
}