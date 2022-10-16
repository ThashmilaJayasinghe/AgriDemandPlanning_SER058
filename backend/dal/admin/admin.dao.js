const bcrypt = require("bcrypt");
const Admin = require("../admin/admin.model")

const save = async ({userName, password, role}) => {
    const admin = await Admin({
        userName,
        password,
        role:"Admin"
    });

    bcrypt.hash(password, 7, async (err, hash) => {
        admin.password = hash;
        const newAdmin = await admin.save();

        if (newAdmin) {
            console.log({
                userName,
                password,
                role
            });
            return admin;
        }
    });
};

module.exports = {
    save
}