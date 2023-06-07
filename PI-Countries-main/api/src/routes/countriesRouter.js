const { Router } = require("express");
const { getCountries, getCountryName } = require("../controllers/controllers");
const countriesRouter = Router();

countriesRouter.get("/", async (req,res)=>{
    const {name}= req.query;
console.log(name);
    try {
        
    if(name){
     let nameByQuery = await getCountryName(name);
    res.status(200).send(nameByQuery);
}else{
    let getAll = await getCountries();

    res.status(200).send(getAll);
} 
    } catch (error) {
       
        res.status(404).json({error:error.mesagge})
    }
   
});

countriesRouter.get("/:id", (req,res)=>{
    res.status(200).send("Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.");
});


module.exports = countriesRouter;