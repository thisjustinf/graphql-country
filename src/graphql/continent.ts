import { DocumentNode, gql } from "@apollo/client";

export const GET_CONTINENTS_QUERY: DocumentNode = gql`
  query Continents($filter: ContinentFilterInput) {
    continents(filter: $filter) {
      code
      name
    }
  }
`;

export const GET_CONTINENT_BY_CODE_QUERY: DocumentNode = gql`
  query Continent($code: ID!){
    continent(code: $code){
      code
      name
    }
  }
`;