"use client"

import { ApolloProvider } from "@apollo/client";
import type { PropsWithChildren } from "react";
import { client } from "../libs/apollo-client";

export function ApolloClientProvider({children}: PropsWithChildren<unknown>) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>   
}

// mutation AddVideo($name: String!, $video: Upload!, $description: String!, $playlistId: String!) {
// addVideo(name: $name, video: $video, description: $description, playlistId: $playlistId)
//  }
    