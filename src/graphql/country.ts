import { DocumentNode, gql } from "@apollo/client";

export const GET_COUNTRIES_QUERY: DocumentNode = gql`
  query getCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      capital
      name
      emoji
      emojiU
      continent {
        name
      }
      languages {
        code
        name
        native
      }
    }
  }
`;

export const GET_COUNTRY_BY_CODE_QUERY: DocumentNode = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      capital
      name
      emoji
      emojiU
      continent {
        name
      }
      languages {
        code
        name
        native
      }
      states {
        code
        name
      }
    }
  }
`;
