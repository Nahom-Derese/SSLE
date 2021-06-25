import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query getSingleResult($Reg_no: Int) {
    getSingleResult(Reg_no: $Reg_no) {
      Reg_no
      Name
      Eligibility
      Stream
      School
      Sex
      Result {
        Biology
        Chemistry
        Civics
        English
        Maths
        Physics
        SAT
      }
    }
  }
`;
