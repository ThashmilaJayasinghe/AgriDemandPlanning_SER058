const Message = require('./message.model');
const Recipient = require('./recipient.model');


const saveMessage = async ({recipientId, subject, creatorId, messageBody, parentMessageId, status}) => {

    try {
        const message = await Message.create({
            subject,
            creatorId,
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

module.exports = {
    saveMessage,
}