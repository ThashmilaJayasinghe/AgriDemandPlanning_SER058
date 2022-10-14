const { save, getAll, updateById, removeById} = require("../dal/announcements/announcement.dao")

const createAnnouncement = async (req,res)=>{
    const {heading,message,postingDate,DeadLine,viewer} = req.body;
    try {
        const announcement = await save({
            heading,
            message,
            postingDate,
            DeadLine,
            viewer
        })
        return res.status(201).json(announcement);
    }catch (err){
        console.log(err);
        res.json(err);
    }
}

const getAnnouncements = async (req, res) => {
    try {
        const announcements = await getAll();
        res.status(200).json(announcements);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const updateAnnouncement = async (req,res)=>{
    const {heading,message,postingDate,DeadLine,viewer} = req.body;
    try {
        const announcement = await updateById(req.params.id, {
            heading,
            message,
            postingDate,
            DeadLine,
            viewer
        })
        return res.status(201).json({msg:"Announcement updated"},announcement);
    }catch (err){
        console.log(err);
        res.json(err);
    }
}

const deleteAnnouncement = async (req, res) => {
    try {
        await removeById(req.params.id);
        res.status(200).json(req.params.id);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

module.exports = {
    createAnnouncement,
    getAnnouncements,
    updateAnnouncement,
    deleteAnnouncement
}