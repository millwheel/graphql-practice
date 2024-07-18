import { gql } from "apollo-server";

// type definition using graph-ql

// right side of colon is type of data
// "!" <= it means "non-nullable"
const typeDefs = gql`
  """
  Tweet user
  """
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    fullName = firstName + lastName
    """
    fullName: String!
  }
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    """
    Delete a tweet if found, else return false.
    """
    deleteTweet(id: ID!): Boolean!
  }
`;

export default typeDefs;
