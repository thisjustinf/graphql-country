import { DocumentNode, gql } from "@apollo/client";

export const GET_COUNTRIES_QUERY: DocumentNode = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      currency
      capital
    }
  }
`;

export const GET_COUNTRY_BY_CODE_QUERY: DocumentNode = gql`
  query Country($code: ID!) {
    country(code: $code){
      code
      currency
      capital
    }
  }
`;
