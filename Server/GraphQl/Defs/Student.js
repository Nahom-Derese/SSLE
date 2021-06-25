import graphql from "graphql";
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import Result from "./Result.js";

const UserType = new GraphQLObjectType({
  name: "UserType",
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

export default UserType;
