import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    // change uri from GRAPHCMS (contentAPI)
  uri: 'https://api-sa-east-1.hygraph.com/v2/clf4izifj4o1a01t7f0c3e6m0/master',
  cache: new InMemoryCache(),
});

export default client;