let books = [
  {
    id: '1', 
    title: 'Harry Potter and the Philosopher\'s Stone',
    author_id: '1', 
    publish_date: [
      {
        UK: "06-26-1997"
      },
      {
        US: "01-09-1998"
      }
    ],
  },
  {
    id: '2', 
    title: 'Harry Potter and the Chamber of Secrets',
    author_id: '1', 
    publish_date: [
      {
        UK: "07-02-1998"
      },
      {
        US: "02-06-1999"
      }
    ],
  },
  {
    id: '3', 
    title: 'Harry Potter and Prisoner of Azkaban',
    author_id: '1', 
    publish_date: [
      {
        UK: "07-08-1999"
      },
      {
        US: "08-09-1999"
      }
    ],
  },
  {
    id: '4', 
    title: 'Harry Potter and the Goblet of Fire',
    author_id: '1', 
    publish_date: [
      {
        UK: "07-08-2000"
      },
      {
        US: "07-08-2000"
      }
    ],
  },
  {
    id: '5', 
    title: 'Lord of the Rings: The Fellowship of the Ring',
    author_id: '2', 
    publish_date: [
      {
        UK: "07-29-1954"
      },
      {
        US: "10-21-1954"
      }
    ],
  },
  {
    id: '6', 
    title: 'Lord of the Rings: The Two Towers',
    author_id: '2', 
    publish_date: [
      {
        UK: "11-11-1954"
      },
      {
        US: "04-21-1955"
      }
    ],
  },
  {
    id: '7', 
    title: 'Lord of the Rings: The Return of the King',
    author_id: '2', 
    publish_date: [
      {
        UK: "10-20-1955"
      },
      {
        US: "01-05-1956"
      }
    ],
  },
  {
    id: '8', 
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author_id: '3', 
    publish_date: [
      {
        UK: "10-16-1950"
      },
    ],
  },
  {
    id: '9', 
    title: 'The Chronicles of Narnia: Prince Caspian: The Return to Narnia',
    author_id: '3', 
    publish_date: [
      {
        UK: "10-15-1951"
      },
    ],
  },
  {
    id: '10', 
    title: 'The Chronicles of Narnia: The Voyage of the Dawn Treader',
    author_id: '3', 
    publish_date: [
      {
        UK: "09-15-1952"
      },
    ],
  },
  {
    id: '11', 
    title: 'The Chronicles of Narnia: The Silver Chair',
    author_id: '3', 
    publish_date: [
      {
        UK: "09-07-1953"
      },
    ],
  },
  {
    id: '12', 
    title: 'The Chronicles of Narnia: The Horse and His Boy',
    author_id: '3', 
    publish_date: [
      {
        UK: "09-06-1954"
      },
    ],
  },
  {
    id: '13', 
    title: 'The Chronicles of Narnia: The Magician\'s Nephew',
    author_id: '3', 
    publish_date: [
      {
        UK: "05-02-1955"
      },
    ],
  },
  {
    id: '14', 
    title: 'The Chronicles of Narnia: The Last Battle',
    author_id: '3', 
    publish_date: [
      {
        UK: "09-04-1956"
      },
    ],
  },
]

let authors = [
  {id: '1', name: 'J.K. Rowling', verified: true},
  {id: '2', name: 'J. R. R. Tolkien', verified: true},
  {id: '3', name: 'C. S. Lewis', verified: true},
]

let reviews = [
  {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', book_id: '2'},
  {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', book_id: '1'},
  {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', book_id: '3'},
  {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', book_id: '4'},
  {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', book_id: '5'},
  {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', book_id: '2'},
  {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', book_id: '1'},
]

export default { books, authors, reviews }