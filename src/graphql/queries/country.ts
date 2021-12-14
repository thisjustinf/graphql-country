import { DocumentNode, gql } from "@apollo/client";

export const ALL_COUNTRIES_QUERY: DocumentNode = gql`
  {
    countries {
      code
      name
    }
  }
`;
