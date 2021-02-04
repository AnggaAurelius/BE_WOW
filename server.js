const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
const router = require("./src/routes");

const port = 5000;

app.use(bodyParser.json());
app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`Listening to port ${port}, App Ready !`);
});

