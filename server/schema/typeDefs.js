const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    bookId: ID
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUserById(userId: ID!): User
  }

  input BookInput {
    bookId: ID
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(userId: ID!, bookInput: BookInput!): User
    deleteBook(userId: ID!, bookId: ID!): User
  }
`;

module.exports = typeDefs;
