const {  Activity, Country,  } = require("../db");
const {Op} = require("sequelize");



const postActivity = async (name, difficulty, duration, season, countries) => {
    
  
    const [activity, created] = await Activity.findOrCreate({
      where: { name },
      defaults: { difficulty, duration, season },
    });
  
    const foundCountries = await Country.findAll({
      where: { name: { [Op.iLike]: `%${countries}%` } },
    });
  
    await Promise.all(
      foundCountries.map((country) => country.addActivity(activity))
    );
  
    return activity;
  };


const getActivities = async ()=> {

    let allActivity = await Activity.findAll();

    return allActivity;
};





module.exports = {

    getActivities,
    postActivity

};


    
      
  

  
