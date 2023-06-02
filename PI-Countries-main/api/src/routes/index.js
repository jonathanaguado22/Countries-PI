const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activitiesRouter = require("./activitiesRouter");
const countriesRouter = require("./countriesRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/activities", activitiesRouter);

router.use("/countries", countriesRouter);

router.get("/", (req,res)=>{
    res.status(200).send("Ruta principal o home");
});
module.exports = router;
