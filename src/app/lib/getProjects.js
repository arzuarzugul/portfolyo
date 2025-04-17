import { gql, GraphQLClient } from 'graphql-request';

// .env dosyasındaki çevre değişkenlerini kullanın
const HYGRAPH_URL = process.env.HYGRAPH_API_URL;
const HYGRAPH_API_TOKEN = process.env.HYGRAPH_API_TOKEN;

// GraphQLClient ile yeni bir bağlantı oluşturun
const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_API_TOKEN}`,
  },
});

const GET_PROJECTS = gql`
  query MyQuery {
    projects {
      description
      id
      tags
      title
      source
      image {
        url
      }
    }
  }
`;

export const getProjects = async () => {
  try {
    const { projects } = await hygraph.request(GET_PROJECTS);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
