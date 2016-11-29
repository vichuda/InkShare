import cuid from 'cuid'
import Book from '../models/book'
import TradeRequest from '../models/trade-request'
import User from '../models/user'
import Shipment from '../models/shipment'

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
  const { tradersID, tradersBookID, userID, bookID } = req.body
  if (!req.user) {
    return res.status(403).send({ message: 'you need to login' })
  }

  const databaseQueries = [
    Book.findOne({ id: tradersBookID }),
    Book.findOne({ id: bookID }),
    User.findOne({ id: tradersID }),
    User.findOne({ id: userID })
  ]


  function createShipment(shipToUser, originalUser, book) {
    return new Shipment({
      shipToUser: shipToUser.id,
      originalUser: originalUser.id,
      book: book.name
    })
  }


  Promise.all(databaseQueries)
    .then(results => {
      const [tradersBook, book, trader, user] = results

      const tradersShipment = createShipment(user, trader, tradersBook)
      const usersShipment = createShipment(trader, user, book)

      if (!tradersBook || !book || !trader || !user) {
        return res.status(403).end()
      }

      const saveAndDeletePromises = [
        tradersShipment.save(),
        usersShipment.save(),
        book.remove(),
        tradersBook.remove(),
      ]

      return Promise.all(saveAndDeletePromises)
        .then(() => res.send({ message: 'success' }))
    })
    .catch(error => {
      console.error(error) // eslint-disable-line
      res.status(500).end()
    })
}


export function declineTrade(req, res) {
  TradeRequest.findOneAndRemove(req.body)
    .then(() => res.send({ message: 'success' }))
    .catch(error => {
      console.error(error) // eslint-disable-line
      req.status(500).end()
    })
}


export function getTradeRequests(req, res) {
  if (!req.user) {
    return res.status(403).send([])
  }

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
