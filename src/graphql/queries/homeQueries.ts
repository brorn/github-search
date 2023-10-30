import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query SearchRepositories($queryString: String!, $first: Int!) {
    search(query: $queryString, type: REPOSITORY, first: $first) {
      edges {
        node {
          ... on Repository {
            name
            description
            stargazers {
              totalCount
            }
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

export { GET_REPOSITORIES };
