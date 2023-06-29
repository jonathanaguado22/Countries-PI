const { Router } = require("express");
const {  handlerGetAll, handlerPost, handlerDeleteAct } = require("../handlers/handlersActivities");

const activitiesRouter = Router();

activitiesRouter.post("/", handlerPost);

activitiesRouter.get("/", handlerGetAll);

activitiesRouter.delete("/:name", handlerDeleteAct);

module.exports = activitiesRouter;