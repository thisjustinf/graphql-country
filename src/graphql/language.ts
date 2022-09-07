import { DocumentNode, gql } from "@apollo/client";

export const ALL_LANGUAGES_QUERY: DocumentNode = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      currency
      capital
    }
  }
`;

export const LANGUAGE_BY_NAME_QUERY: DocumentNode = gql`
  query Country
`;
