import graphql from "graphql";
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import Result from "./Result.js";

const Student = new GraphQLObjectType({
  name: "Student",
  fields: () => ({
    Reg_no: { type: GraphQLInt },
    Name: { type: GraphQLString },
    Eligibility: { type: GraphQLString },
    Stream: { type: GraphQLString },
    School: { type: GraphQLString },
    Sex: { type: GraphQLString },
    Result: {
      type: Result,
      resolve(parent, args) {
        return parent.Result;
      },
    },
  }),
});

export default Student;
