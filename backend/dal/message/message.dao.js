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

// const getAll = async () => {
//     const farmers =  await Farmer.find();
//     return farmers;
// };
//
// const getById = async (id) => {
//     const farmer = await Farmer.findById(id);
//     return farmer;
// };
//
// const updateById = async (id, {fullName,NIC,gender, address,province, district,  email, contactNumber, categories, hectare}) => {
//     const farmer = await Farmer.findByIdAndUpdate(id, {
//         fullName,
//         NIC,
//         gender,
//         address,
//         province,
//         district,
//         email,
//         contactNumber,
//         categories,
//         hectare
//     }, {new: true});
//     return farmer;
// };
//
// const removeById = async (id) => {
//     await Farmer.findByIdAndDelete(id)
// };


module.exports = {
    saveMessage,
}