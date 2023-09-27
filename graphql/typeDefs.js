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
    author: Author
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
  type Mutation {
    addBook(book: AddBookInput): Book
    updateBook(id: ID!, edits: EditBookInput!): Book
    deleteBook(id: ID!): [Book]
    addAuthor(author: AddAuthorInput!): Author
    updateAuthor(id: ID!, edits: EditAuthorInput!): Author
    deleteAuthor(id: ID!): [Author]
  }
  input AddBookInput {
    title: String!
    publish_date: [DateInput]!
    author_id: String
  }
  input DateInput {
    UK: String
    US: String
  }
  input EditBookInput {
    title: String
    publish_date: [DateInput]
    author_id: String
  }
  input AddAuthorInput {
    name: String!
    verified: Boolean!
  }
  input EditAuthorInput {
    name: String
    verified: Boolean
  }
`