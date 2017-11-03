import express from "express";
import path from "path";
import routes from "./routes/routes.js";

let app = express();

app.use("/client", express.static(path.join(__dirname, "client")))

routes(app);

app.listen(8080, () => {
    console.log("server running");
}); 