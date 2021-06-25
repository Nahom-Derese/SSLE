import graphql, { GraphQLString } from "graphql";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} from "graphql";
import UserType from "../Defs/Student.js";
import Data from "../../Data.json";

const Rootquery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllResults: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return Data;
      },
    },

    getResultByReg_no: {
      type: UserType,
      args: {
        Reg_no: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Data.find((result) => result.Reg_no === args.Reg_no);
      },
    },

    getResultByName: {
      type: UserType,
      args: {
        Name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Data.find((result) => result.Name === args.Name.toUpperCase());
      },
    },
  },
});

const schema = new GraphQLSchema({ query: Rootquery });

export default schema;
