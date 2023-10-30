import client from "@/graphql/client";
import { GET_REPOSITORIES } from "@/graphql/queries/homeQueries";
import { Card } from "@/store/home";

const getCards = async (queryString = "", first = 20) => {
  try {
    const { data } = await client.query({
      query: GET_REPOSITORIES,
      variables: { queryString, first },
    });

    if (data && data.search && data.search.edges) {
      return data.search.edges.map((edge: { node: Card }) => ({
        ...edge.node,
        id: `${edge.node.owner.login?.replaceAll(
          " ",
          ""
        )}_${edge.node.name?.replaceAll(
          " ",
          ""
        )}_${edge.node.description?.replaceAll(" ", "")}`,
      }));
    }

    return [];
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};

export { getCards };
