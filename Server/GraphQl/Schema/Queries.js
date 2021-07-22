import graphql, { GraphQLString } from "graphql";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} from "graphql";
import StudentModel from "../../Models/Student.js";
import Student from "../Defs/Student.js";
import Data from "../../run_results.json";

const Rootquery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllResults: {
      type: new GraphQLList(Student),
      async resolve(parent, args) {
        return await StudentModel.find().then((res) => res);
      },
    },

    getResultByReg_no: {
      type: Student,
      args: {
        Reg_no: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return StudentModel.findOne({ Reg_no: args.Reg_no })
          .then((res) => res)
          .catch((err) => {
            console.log(err);
          });
      },
    },

    getResultByName: {
      type: new GraphQLList(Student),
      args: {
        Name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return StudentModel.find({ Name: new RegExp(args.Name, "i") })
          .then((res) => res)
          .catch((err) => {
            console.log(err);
          });
      },
    },

    getTopResult: {
      type: new GraphQLList(Student),
      args: {
        TOP: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return StudentModel.find()
          .limit(args.TOP)
          .sort({ "Result.Total": -1 })
          .then((res) => res)
          .catch((err) => {
            console.log(err);
          });
      },
    },
  },
});

const schema = new GraphQLSchema({ query: Rootquery });

export default schema;
