import { Router } from "express";
import { getAllItems, getOneItem } from "./controller";


var apiRouter = Router();

apiRouter.get("/items", getAllItems);

apiRouter.get("/item/:itemId", getOneItem);


export default apiRouter;