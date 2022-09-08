import { DocumentNode, gql } from "@apollo/client";

export const GET_COUNTRIES_QUERY: DocumentNode = gql`
  query getCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      currency
      capital
      emoji
      name
    }
  }
`;

export const GET_COUNTRY_BY_CODE_QUERY: DocumentNode = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      currency
      capital
      name
      emoji
    }
  }
`;
