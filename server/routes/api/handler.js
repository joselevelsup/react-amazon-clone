import { Router } from "express";
import { 
    getAllItems, 
    getOneItem, 
    searchItem 
} from "./controller";


var apiRouter = Router();

apiRouter.get("/items", getAllItems);

apiRouter.get("/item/:itemId", getOneItem);

apiRouter.get("/search-items", searchItem);


export default apiRouter;