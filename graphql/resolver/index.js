// mocked database
import db from "../../_db.js"

export const resolvers = {
  Query: {
    books() {
      return db.books
    },
    reviews() {
      return db.reviews
    },
    authors() {
      return db.authors
    },
    book(parent, args, context) {
      return db.books.find((book) => book.id === args.id)
    },
    review(parent, args, context) {
      return db.reviews.find((review) => review.id === args.id)
    },
    author(parent, args, context) {
      return db.authors.find((author) => author.id === args.id)
    },
  },
  Book: {
    reviews(parent) {
      return db.reviews.filter((review) => review.book_id === parent.id)
    },
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id)
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id)
    },
    books(parent) {
      return db.books.filter((book) => book.author_id === parent.id)
    }
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id)
    },
    book(parent) {
      return db.books.find((book) => book.id === parent.book_id)
    }
  }
}