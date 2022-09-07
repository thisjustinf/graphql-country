import { DocumentNode, gql } from "@apollo/client";

export const ALL_COUNTRIES_QUERY: DocumentNode = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      currency
      capital
    }
  }
`;

export const COUNTRY_BY_ID_QUERY: DocumentNode = gql`
  query Country
`;
