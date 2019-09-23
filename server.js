require("dotenv").config();
const express = require('express');
const graphqlHTTP = require("express-graphql");
const cors = require('cors');
const path = require('path');

const schema = require("./schema/schema");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "/client/build")));

app.use("/api", graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === "production" ? false : true
}));

app.get("*", (req, res) => {
  let reactEntry = process.env.NODE_ENV === "production" ? 
    "/client/build/index.html" :
    "/client/public/index.html";
  res.sendFile(path.join(__dirname, reactEntry));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
