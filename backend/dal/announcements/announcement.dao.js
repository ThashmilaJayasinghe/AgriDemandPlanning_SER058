const Announcement = require('./announcement.model')

const save = async ({heading,message,postingDate,DeadLine,viewer})=>{

    try {
        const announcement = await Announcement.create({
            heading,
            message,
            postingDate,
            DeadLine,
            viewer
        });

        return announcement;
    }catch (err){
        console.log(err);
        return err;
    }
}

const getAll = async ()=>{
    const announcements = await Announcement.find();
    return announcements
}

const updateById = async (id,{heading,message,postingDate,DeadLine,viewer})=>{
    const announcement = await Announcement.findByIdAndUpdate(id,{
        heading,
        message,
        postingDate,
        DeadLine,
        viewer
    })
    return announcement;
}

const removeById = async (id)=>{
    await Announcement.findByIdAndDelete(id)
}

module.exports = {
    save,
    getAll,
    updateById,
    removeById
}