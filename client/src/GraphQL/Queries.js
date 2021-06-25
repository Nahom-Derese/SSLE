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
      }
    }
  }
`;
