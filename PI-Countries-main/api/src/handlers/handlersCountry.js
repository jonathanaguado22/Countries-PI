const { getCountries, getCountryName, getCountryId } = require("../controllers/countryControllers")



const handlerCountries = async  (req,res)=>{
    const {name}= req.query;

    try {
        if (name) {
          const country = await getCountryName(name);
    
          if (country) {
            res.status(200).json(country);
          } else {
            res.status(404).send("The country does not exist");
          }
        } else {
          const countries = await getCountries();
          res.status(200).json(countries);
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const handlerIdCountry = async (req,res)=>{
    const { id } = req.params;

    try {
        if(id){
        let countryById = await getCountryId(id);
        
        if(countryById) {
        res.status(200).json(countryById);
    }else{
        res.status(404).send("The country does not exist")
    }}  
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports ={
    handlerCountries,
    handlerIdCountry
}