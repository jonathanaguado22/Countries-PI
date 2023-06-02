const { Router } = require("express");

const activitiesRouter = Router();

activitiesRouter.post("/", (req,res)=>{
    res.status(200).send("Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.");
});

activitiesRouter.get("/", (req,res)=>{
    res.status(200).send("Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.");
});

module.exports = activitiesRouter;