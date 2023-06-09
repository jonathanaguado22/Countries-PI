const { Router } = require("express");
const {  handlerGetAll, handlerPost } = require("../handlers/handlersActivities");

const activitiesRouter = Router();

activitiesRouter.post("/", handlerPost);

activitiesRouter.get("/", handlerGetAll);

module.exports = activitiesRouter;