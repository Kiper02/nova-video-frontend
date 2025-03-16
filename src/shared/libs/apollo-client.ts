import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink, split } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { WebSocketLink  } from '@apollo/client/link/ws'
import { getMainDefinition } from "@apollo/client/utilities";


const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
  credentials: "include",
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
  credentials: "include",
})


const wsLink = new WebSocketLink({
  // uri: String(process.env.NEXT_PUBLIC_SERVER_GRAPHQL_URL),
  uri: String(process.env.NEXT_PUBLIC_SERVER_GRAPHQL_URL).replace(/^http/, 'ws'),

  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  uploadLink,
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
