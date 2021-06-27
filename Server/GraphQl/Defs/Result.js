import { GraphQLObjectType, GraphQLInt } from "graphql";
import graphql from "graphql";

const Result = new GraphQLObjectType({
  name: "Result",
  fields: () => ({
    Biology: { type: GraphQLInt },
    Chemistry: { type: GraphQLInt },
    Civics: { type: GraphQLInt },
    English: { type: GraphQLInt },
    Maths: { type: GraphQLInt },
    Physics: { type: GraphQLInt },
    SAT: { type: GraphQLInt },
    Total: { type: GraphQLInt },
  }),
});

export default Result;
