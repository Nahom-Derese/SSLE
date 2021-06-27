import express from "express";
import graphql from "graphql";
import { graphqlHTTP } from "express-graphql";
import schema from "./GraphQl/Schema/Queries.js";
import cors from "cors";
import mongoose from "mongoose";

// intializing app
const app = express();

// Making in LocalHost Fetch possible
app.use(cors());

// mongoDB Atlas mongoose URI
const Url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00.sothe.mongodb.net:27017,cluster0-shard-00-01.sothe.mongodb.net:27017,cluster0-shard-00-02.sothe.mongodb.net:27017/${process.env.MONGO_DB}?ssl=true&replicaSet=atlas-wuxqm1-shard-0&authSource=admin&retryWrites=true&w=majority`;

// Make A GraphQL Endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Connecting to MongoDB and listening to Port
mongoose
  .connect(Url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(3001, console.log("Started Succefully at port 3001"));
  })
  .catch((err) => {
    console.log(err);
  });
