import cuid from 'cuid'
import Book from '../models/book'
import TradeRequest from '../models/trade-request'

export function getBooks(req, res) {
  Book.find()
    .then(books => {
      res.send(books || [])
    })
}


export function createBook(req, res) {
  const book = req.body
  book.id = cuid()
  book.seller = req.user.id

  new Book(book)
    .save()
    .then(savedBook => res.send(savedBook || {}))
}


export function createTradeRequest(req, res) {
  if (!req.user) {
    return res.status(403).end()
  }
  // start back here we need to have the client send the userID getting it from the seller on book
  const tradersID = req.user.id
  const tradersBookID = req.body.tradersBookID
  const userID = req.body.userID
  const bookID = req.body.bookID
  const userName = req.body.userName

  new TradeRequest({ tradersID, tradersBookID, userID, bookID, userName })
    .save()
    .then(tradeRequest => res.send({ tradeRequest }))
    .catch(error => {
      console.error(error) // eslint-disable-line
      res.status(500).end()
    })
}


export function confirmTrade(req, res) {
  console.log('confirming the trade with request body of: ', req.body)
  res.status(204).end()
}


export function declineTrade(req, res) {
  console.log(req.body)
  res.send({ message: 'success' })
}


export function getTradeRequests(req, res) {
  if (!req.user) {
    return res.status(403).send([])
  }
  // start back here make user this works then work on creating trades
  const userID = req.user.id
  TradeRequest.find({ userID })
    .then(tradeRequests => res.send(tradeRequests))
    .catch(error => {
      console.error(error) // eslint-disable-line
      res.status(500).send([])
    })
}


export function deleteBook(req, res) {
  const id = req.body.id
  if (!req.user) {
    return res.status(403)
  }

  Book.findOne({ id })
    .then(foundBook => {
      if (!foundBook) {
        res.status(410)
      } else if (foundBook.seller !== req.user.id) {
        res.status(403)
      } else {
        res.status(204)
        foundBook.remove()
      }

      res.end()
    })
    .catch(error => console.error(error)) // eslint-disable-line
}
