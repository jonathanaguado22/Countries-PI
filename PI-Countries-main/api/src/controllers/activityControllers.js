const {  Activity } = require("../db");
const {Op} = require("sequelize");


const postActivity = async (name, difficulty, duration, season, countries) => {

    let findActivity = await Activity.findOrCreate({
        where:{
            name:{
                [Op.eq]: name
            }
        },
        defaults: { difficulty, duration, season },
    });

    if(!countries || countries.length === 0){
        throw new Error("The activity must have at least one country")
    }

    let activityCountry = await findActivity.setCountries(countries);

    return activityCountry;
};

const getActivities = async ()=> {

    let allActivity = await Activity.findAll();

    return allActivity;
};





module.exports = {

    getActivities,
    postActivity

};