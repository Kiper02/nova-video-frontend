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
  login: UserModel;
  logout: Scalars['Boolean']['output'];
  register: Scalars['String']['output'];
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

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
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
  videoFindAll: Array<VideoModel>;
  videoFindById: VideoModel;
};


export type QueryVideoFindAllArgs = {
  data: PaginationInput;
};


export type QueryVideoFindByIdArgs = {
  videoId: Scalars['String']['input'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  videoAdded?: Maybe<VideoUploadStatusModel>;
};


export type SubscriptionVideoAddedArgs = {
  userId: Scalars['String']['input'];
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
  avatarLink: Scalars['String']['output'];
  comments: Array<CommentModel>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  numberOfComments: Scalars['Float']['output'];
  numberOfDislikes: Scalars['Float']['output'];
  numberOfLikes: Scalars['Float']['output'];
  playlistId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
};

export type VideoUploadStatusModel = {
  __typename?: 'VideoUploadStatusModel';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type AddVideoMutationVariables = Exact<{
  data: VideoInput;
}>;


export type AddVideoMutation = { __typename?: 'Mutation', addVideo: boolean };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserModel', id: string } };

export type FindAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'UserModel', id: string, email: string }> };

export type VideoFindAllQueryVariables = Exact<{
  data: PaginationInput;
}>;


export type VideoFindAllQuery = { __typename?: 'Query', videoFindAll: Array<{ __typename?: 'VideoModel', id: string, name: string, link?: string | null }> };

export type VideoFindByIdQueryVariables = Exact<{
  videoId: Scalars['String']['input'];
}>;


export type VideoFindByIdQuery = { __typename?: 'Query', videoFindById: { __typename?: 'VideoModel', id: string, playlistId: string, description: string, link?: string | null, name: string, numberOfComments: number, numberOfLikes: number, numberOfDislikes: number, avatarLink: string, comments: Array<{ __typename?: 'CommentModel', id: string, content: string, userId: string }>, user: { __typename?: 'UserModel', username: string } } };

export type VideoAddedSubscriptionVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type VideoAddedSubscription = { __typename?: 'Subscription', videoAdded?: { __typename?: 'VideoUploadStatusModel', userId?: string | null, status: string, message?: string | null } | null };


export const AddVideoDocument = gql`
    mutation AddVideo($data: VideoInput!) {
  addVideo(data: $data)
}
    `;
export type AddVideoMutationFn = Apollo.MutationFunction<AddVideoMutation, AddVideoMutationVariables>;

/**
 * __useAddVideoMutation__
 *
 * To run a mutation, you first call `useAddVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVideoMutation, { data, loading, error }] = useAddVideoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddVideoMutation(baseOptions?: Apollo.MutationHookOptions<AddVideoMutation, AddVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddVideoMutation, AddVideoMutationVariables>(AddVideoDocument, options);
      }
export type AddVideoMutationHookResult = ReturnType<typeof useAddVideoMutation>;
export type AddVideoMutationResult = Apollo.MutationResult<AddVideoMutation>;
export type AddVideoMutationOptions = Apollo.BaseMutationOptions<AddVideoMutation, AddVideoMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    id
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
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
export const VideoFindAllDocument = gql`
    query VideoFindAll($data: PaginationInput!) {
  videoFindAll(data: $data) {
    id
    name
    link
  }
}
    `;

/**
 * __useVideoFindAllQuery__
 *
 * To run a query within a React component, call `useVideoFindAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoFindAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoFindAllQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useVideoFindAllQuery(baseOptions: Apollo.QueryHookOptions<VideoFindAllQuery, VideoFindAllQueryVariables> & ({ variables: VideoFindAllQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideoFindAllQuery, VideoFindAllQueryVariables>(VideoFindAllDocument, options);
      }
export function useVideoFindAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoFindAllQuery, VideoFindAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideoFindAllQuery, VideoFindAllQueryVariables>(VideoFindAllDocument, options);
        }
export function useVideoFindAllSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VideoFindAllQuery, VideoFindAllQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VideoFindAllQuery, VideoFindAllQueryVariables>(VideoFindAllDocument, options);
        }
export type VideoFindAllQueryHookResult = ReturnType<typeof useVideoFindAllQuery>;
export type VideoFindAllLazyQueryHookResult = ReturnType<typeof useVideoFindAllLazyQuery>;
export type VideoFindAllSuspenseQueryHookResult = ReturnType<typeof useVideoFindAllSuspenseQuery>;
export type VideoFindAllQueryResult = Apollo.QueryResult<VideoFindAllQuery, VideoFindAllQueryVariables>;
export const VideoFindByIdDocument = gql`
    query VideoFindById($videoId: String!) {
  videoFindById(videoId: $videoId) {
    id
    playlistId
    comments {
      id
      content
      userId
    }
    description
    link
    name
    numberOfComments
    numberOfLikes
    numberOfDislikes
    user {
      username
    }
    avatarLink
  }
}
    `;

/**
 * __useVideoFindByIdQuery__
 *
 * To run a query within a React component, call `useVideoFindByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoFindByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoFindByIdQuery({
 *   variables: {
 *      videoId: // value for 'videoId'
 *   },
 * });
 */
export function useVideoFindByIdQuery(baseOptions: Apollo.QueryHookOptions<VideoFindByIdQuery, VideoFindByIdQueryVariables> & ({ variables: VideoFindByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideoFindByIdQuery, VideoFindByIdQueryVariables>(VideoFindByIdDocument, options);
      }
export function useVideoFindByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoFindByIdQuery, VideoFindByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideoFindByIdQuery, VideoFindByIdQueryVariables>(VideoFindByIdDocument, options);
        }
export function useVideoFindByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VideoFindByIdQuery, VideoFindByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VideoFindByIdQuery, VideoFindByIdQueryVariables>(VideoFindByIdDocument, options);
        }
export type VideoFindByIdQueryHookResult = ReturnType<typeof useVideoFindByIdQuery>;
export type VideoFindByIdLazyQueryHookResult = ReturnType<typeof useVideoFindByIdLazyQuery>;
export type VideoFindByIdSuspenseQueryHookResult = ReturnType<typeof useVideoFindByIdSuspenseQuery>;
export type VideoFindByIdQueryResult = Apollo.QueryResult<VideoFindByIdQuery, VideoFindByIdQueryVariables>;
export const VideoAddedDocument = gql`
    subscription VideoAdded($userId: String!) {
  videoAdded(userId: $userId) {
    userId
    status
    message
  }
}
    `;

/**
 * __useVideoAddedSubscription__
 *
 * To run a query within a React component, call `useVideoAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useVideoAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoAddedSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useVideoAddedSubscription(baseOptions: Apollo.SubscriptionHookOptions<VideoAddedSubscription, VideoAddedSubscriptionVariables> & ({ variables: VideoAddedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<VideoAddedSubscription, VideoAddedSubscriptionVariables>(VideoAddedDocument, options);
      }
export type VideoAddedSubscriptionHookResult = ReturnType<typeof useVideoAddedSubscription>;
export type VideoAddedSubscriptionResult = Apollo.SubscriptionResult<VideoAddedSubscription>;