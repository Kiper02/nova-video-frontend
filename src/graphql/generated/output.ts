import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type ChannelInput = {
  banner: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
};

export type ChannelModel = {
  __typename?: 'ChannelModel';
  banner: Scalars['String']['output'];
  name: Scalars['String']['output'];
  playlists: Array<PlaylistModel>;
};

export type CommentModel = {
  __typename?: 'CommentModel';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPlaylistToUser: Scalars['Boolean']['output'];
  addVideo: Scalars['Boolean']['output'];
  createPlaylist: Scalars['Boolean']['output'];
  deleteVideo: Scalars['Boolean']['output'];
  deleteVideoByPlaylistId: Scalars['Boolean']['output'];
  emailVerify: Scalars['Boolean']['output'];
  login: Scalars['Boolean']['output'];
  logout: Scalars['Boolean']['output'];
  register: Scalars['Boolean']['output'];
  updateChannel: ChannelModel;
};


export type MutationAddPlaylistToUserArgs = {
  data: Scalars['String']['input'];
};


export type MutationAddVideoArgs = {
  data: VideoInput;
};


export type MutationCreatePlaylistArgs = {
  data: PlaylistInput;
};


export type MutationDeleteVideoArgs = {
  data: Scalars['String']['input'];
};


export type MutationDeleteVideoByPlaylistIdArgs = {
  data: Scalars['String']['input'];
};


export type MutationEmailVerifyArgs = {
  data: VerificationInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateChannelArgs = {
  data: ChannelInput;
};

export type PlaylistInput = {
  channelId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type PlaylistModel = {
  __typename?: 'PlaylistModel';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  video: Array<VideoModel>;
};

export type Query = {
  __typename?: 'Query';
  findAllUsers: Array<UserModel>;
  findByUser: Array<PlaylistModel>;
  findChannelByUser: ChannelModel;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserModel = {
  __typename?: 'UserModel';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type VerificationInput = {
  token: Scalars['String']['input'];
};

export type VideoInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  playlistId: Scalars['String']['input'];
  video: Scalars['Upload']['input'];
};

export type VideoModel = {
  __typename?: 'VideoModel';
  comments: Array<CommentModel>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  numberOfComments: Scalars['Float']['output'];
  numberOfDislikes: Scalars['Float']['output'];
  numberOfLikes: Scalars['Float']['output'];
  playlistId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FindAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'UserModel', id: string, email: string }> };


export const FindAllUsersDocument = gql`
    query findAllUsers {
  findAllUsers {
    id
    email
  }
}
    `;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
      }
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export function useFindAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersSuspenseQueryHookResult = ReturnType<typeof useFindAllUsersSuspenseQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;