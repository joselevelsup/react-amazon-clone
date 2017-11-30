import path from "path";

import apiRouter from "./api/handler";

export default (app) => {
    app.use("/api", apiRouter); 

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    });
}