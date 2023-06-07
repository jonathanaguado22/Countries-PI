const { Router } = require("express");
const { handlerCountries, handlerIdCountry } = require("../handlers/handlersCountry.js")

const countriesRouter = Router();

countriesRouter.get("/", handlerCountries);

countriesRouter.get("/:id", handlerIdCountry);


module.exports = countriesRouter;