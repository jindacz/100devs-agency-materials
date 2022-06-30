// server.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect('mongodb+srv://kurisuuu:511167@cluster0.tgpmqis.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')

    app.get('/', (req, res) => {
      const cursor = db.collection('quotes').find()
      console.log(cursor)
      db.collection('quotes').find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
      
      res.sendFile(__dirname + '/index.html')
      // Note: __dirname is the current directory you're in. Try logging it and see what you get!
      // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
    })

    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function () {
      console.log('listening on 3000');
    })

  })
  .catch(error => console.error(error))

