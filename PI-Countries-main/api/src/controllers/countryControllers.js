

const {  Country, Activity } = require("../db")
const {Op} = require("sequelize");


// const getCountries = async ()=>{

//  const countries = await Country.findAll();

//     return  (countries);
                
// };

const getCountries = async () => {
    const countries = await Country.findAll({
      include: {
        model: Activity,
        through: { attributes: [] },
      },
    });
  
    return countries;
  };


const getCountryName = async (name)=>{
    const nameCountry = await Country.findAll({
        where:{
            name:{
                [Op.iLike]: `%${name}%`,
            }
        }
    })
    return nameCountry
};

const getCountryId = async (id) =>{
    const idCountry = await Country.findOne({
        where:{
            id:{

                [Op.eq]: id.toUpperCase(),   
            }
        },
        include: {
            model: Activity,
            through: { attributes: [] },
    }
  }
);
    return idCountry;
}

module.exports= {
getCountries,
getCountryName,
getCountryId

};

