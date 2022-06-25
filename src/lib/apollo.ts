import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4ys5f0lje01z7hexm915r/master',
  cache: new InMemoryCache(),
});
