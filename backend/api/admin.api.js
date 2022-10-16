const {save} = require("../dal/admin/admin.dao")

const createAdmin = async (req,res)=>{
    const {userName,password,role} = req.body;
    try {
        if(!userName || !password){
            return res.status(400).json({
                success: false,
                msg:'Password and email are required'})
        }
        if(password.length<8){
            return res.status(400).json({
                success: false,
                msg: 'Password should be at least 8 characters long' })
        }

        const admin = await save({
            userName,
            password,
            role
        });
        return res.status(201).json(admin);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

module.exports = {
    createAdmin
}