import { Router } from "express";
import { getAllItems } from "./controller";


var apiRouter = Router();

apiRouter.get("/items", getAllItems);


export default apiRouter;