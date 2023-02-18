const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const agent = require("./routes/agent");
const beneficiaire = require("./routes/beneficiaire");
const sra = require("./routes/sra");
const demandeSoutien = require("./routes/demandeSoutien");
const devisValidation = require("./routes/ValidationDevis");
//const pc = require("./routes/pc");
var cors = require("cors");
//const derangement = require("./routes/Derangement");

const app = express();

app.use(bodyParser.json());
app.use(cors());
//db config
const db = require("./config/key").mongoURI;

//connect to mongo

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

//use routes
app.use("/agent", agent);
app.use("/beneficiaire", beneficiaire);
app.use("/sra", sra);
app.use("/demandeSoutien", demandeSoutien);
app.use("/validationDevis", devisValidation);
app.use("/uploads", express.static("uploads"));
//app.use("/derangement", derangement);
//app.use('/',derang);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server started on port ${port}"));
