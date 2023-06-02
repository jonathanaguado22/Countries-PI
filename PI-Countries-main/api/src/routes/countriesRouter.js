const { Router } = require("express");

const countriesRouter = Router();

countriesRouter.get("/", (req,res)=>{
    res.status(200).send("aca hacer la ruta / y /name");
});

countriesRouter.get("/:id", (req,res)=>{
    res.status(200).send("Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.");
});


module.exports = countriesRouter;