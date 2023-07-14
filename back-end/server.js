const Cors = require("cors");
const express = require("express");
const dbConnection = require("./utils/databaseConnection.js");
const urlController = require("./controllers/urlController.js");
const redirectController = require("./controllers/redirectController.js");
const getAllUrlsController = require("./controllers/getAllUrlsController.js");
const deleteUrlController = require("./controllers/deleteUrlController.js");
const updateUrlController = require("./controllers/updateUrlController.js");
// createing app
const app = express();

// middelwere
app.use(express.json());
app.use(Cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));

// routers
app.post("/api/v1/url", urlController);
app.patch("/api/v1/urlupdate", updateUrlController);
app.get("/:url", redirectController);
app.get("/api/v1/allurls", getAllUrlsController);
app.delete("/api/v1/deleteUrl", deleteUrlController);

//PORT
const PORT = 8000;

app.listen(PORT, () => {
  dbConnection();
  console.log(`server listening on PORT ${PORT}`);
});
