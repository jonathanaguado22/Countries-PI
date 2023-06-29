const {  Activity, Country,  } = require("../db");
const {Op} = require("sequelize");



const postActivity = async (name, difficulty, duration, season, countries) => {
    
  
    const [activity, created] = await Activity.findOrCreate({
      where: { name },
      defaults: { difficulty, duration, season },
    });
  
    if (countries && countries.length > 0) {
      const foundCountries = await Country.findAll({
        where: { name: { [Op.iLike]: { [Op.any]: countries } } },
      });
  
      await Promise.all(
        foundCountries.map((country) => country.addActivity(activity))
      );
    }
    return activity;
  };


const getActivities = async ()=> {

    let allActivity = await Activity.findAll();

    return allActivity;
};

const deleteActivity = async (name)=>{

    const deletedActivityCount = await Activity.destroy({
      where: { name: name },
    });
  
  
    return deletedActivityCount;
 
}




module.exports = {

    getActivities,
    postActivity,
    deleteActivity

};

