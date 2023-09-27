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
  },
  Mutation: {
    addBook(parent, args, context) {
      let book = {
        ...args.book,
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.books.push(book)
      return book
    },
    updateBook(parent, args, context) {
      db.books = db.books.map(book => {
        if(book.id === args.id) {
          return { ...book, ...args.edits }
        }
        return book
      })
      return db.books.find((book) => book.id === args.id)
    },
    deleteBook(parent, args, context) {
      db.books = db.books.filter(book => book.id !== args.id)
      return db.books
    },
    addAuthor(parent, args, context) {
      let author = {
        ...args.author,
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.authors.push(author)
      return author
    },
    updateAuthor(parent, args, context) {
      db.authors = db.authors.map(author => {
        if(author.id === args.id) {
          return { ...author, ...args.edits }
        }
        return author
      })
      return db.authors.find(author => author.id === args.id)
    },
    deleteAuthor(parent, args, context) {
      db.authors = db.authors.filter(author => author.id !== args.id)
      return db.authors
    }
  }
}