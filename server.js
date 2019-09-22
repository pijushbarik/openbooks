require("dotenv").config();
const axios = require("axios");
const express = require('express');
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");

const app = express();

app.use("/api", graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === "production" ? false : true
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
