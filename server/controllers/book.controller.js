import cuid from 'cuid'

const books = [
  {
    name: 'Programming Collective Intelligence',
    author: 'Toby Segaran',
    image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRgfb9HBiMaEusNShDCHWJV7Qlp6uRpvA29SMIy7PoBXk09BtaX',
    description: 'Intelligence is power',
    seller: '46356345',
    price: 10.50,
    id: '12321'
  },
  {
    name: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann Mcdowell',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51F6Lwyq5JL._SX348_BO1,204,203,200_.jpg',
    description: 'a good book',
    seller: '4635324345',
    price: 1,
    id: '12493'
  }
]

export function getBooks(req, res) {
  res.send(books)
}


export function createBook(req, res) {
  const book = req.body
  book.id = cuid()
  book.seller = req.user.id

  // save the book in the database when you get it setup

  res.send(book)
}


export function confirmTrade(req, res) {
  console.log('confirming the trade with request body of: ', req.body)
  res.end(500)
}
