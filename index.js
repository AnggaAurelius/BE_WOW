const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = require("./src/routes");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Listening to port ${port}, App Ready !`);
});
