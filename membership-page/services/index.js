import { request, gql } from 'graphql-request'
// create graphql API (seetings/environment : in graphcms)
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
              edges {
                node {
                  author {
                    bio
                    name
                    id
                    photo {
                      url
                    }
                  }
                  createdAt
                  slug
                  title
                  description
                  featureImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
            }
          }
    `

    // make request to get the query
    const result = await request(graphqlAPI, query)
    
    // posts
    return result.postsConnection.edges;
}