import express from "express";
import graphql from "graphql";
import { graphqlHTTP } from "express-graphql";
import schema from "./GraphQl/Schema/Queries.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3001, console.log("Started Succefully"));
