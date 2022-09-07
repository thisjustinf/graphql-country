import { DocumentNode, gql } from "@apollo/client";

export const GET_LANGUAGES_QUERY: DocumentNode = gql`
  query Languages($filter: LanguageFilterInput) {
    languages(filter: $filter) {
      code
      name
      native
    }
  }
`;

export const GET_LANGUAGE_BY_CODE_QUERY: DocumentNode = gql`
  query Language($code: ID!){
    language(code: $code){
      code
      name
      native
    }
  }
`;
