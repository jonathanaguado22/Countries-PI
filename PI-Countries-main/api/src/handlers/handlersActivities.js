const { getActivities, postActivity } = require("../controllers/activityControllers");




const handlerPost = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        let newActivies = await postActivity( name, difficulty, duration, season, countries );

        res.status(200).json(newActivies);
    } catch (error) {
console.log(error)
        res.status(500).json({error: error.mesagge });
        
    }
};

const handlerGetAll = async (req, res)=>{
    try {
        let allActivities = await getActivities(req.query);

        res.status(200).json(allActivities);

    } catch (error) {
        
        res.status(500).json({error: error.message });
    }
};


module.exports = {
    handlerGetAll,
    handlerPost
}
