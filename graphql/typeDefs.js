export const typeDefs = `#graphql
  type Date {
    UK: String
    US: String
  },
  type Book {
    id: ID!
    title: String!
    publish_date: [Date]!
    reviews: [Review!]
    author: Author!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    book: Book!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews:[Review!]
    books:[Book!]
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
`