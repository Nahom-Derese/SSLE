import { gql } from "@apollo/client";

export const LOAD_BY_Reg_NO = gql`
  query getResultByReg_no($Reg_no: Int) {
    getResultByReg_no(Reg_no: $Reg_no) {
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
        Total
      }
    }
  }
`;

export const LOAD_BY_NAME = gql`
  query getResultByName($Name: String!) {
    getResultByName(Name: $Name) {
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
        Total
      }
    }
  }
`;

export const LOAD_TOP_RESULT = gql`
  query getTopResult($TOP: Int) {
    getTopResult(TOP: $TOP) {
      Name
      Sex
      Stream
      Result {
        Total
      }
    }
  }
`;
