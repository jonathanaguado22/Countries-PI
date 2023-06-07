

const { Activity, Country, ActivityByCountry } = require("../db")
const {Op} = require("sequelize");


const getCountries = async ()=>{

 const countries = await Country.findAll();

    return  (countries);
                
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


module.exports= {
getCountries,
getCountryName,

};

