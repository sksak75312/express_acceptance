const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:pages', (req, res) => {
  const page = req.params.pages.charAt(0).toUpperCase() + req.params.pages.slice(1)
  res.render('pages', { pages: page })
})

app.listen(port, () => {
  console.log(`Express is running on localhost:${port}`)
})

