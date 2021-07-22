import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";
import graphql from "graphql";

const Placement = new GraphQLObjectType({
  name: "Placement",
  fields: () => ({
    Stream_Placement: { type: GraphQLString },
    Stream_Choice_no: { type: GraphQLInt },
    University_Placement: { type: GraphQLString },
    University_Choice_no: { type: GraphQLInt },
  }),
});

export default Placement;
