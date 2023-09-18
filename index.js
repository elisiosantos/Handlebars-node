const express = require('express')
const exphbs = require('express-handlebars')
const products = require('./products')

const app = express()

// configurar posta public para arquivos estáticos
app.use(express.static('public'))

// configurar o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/array', (req, res) => {
    const itens = ['home'];



   
    res.render('array', { itens })

})





app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/cadastrar', (req, res) => {
    res.render('cadastrar')
})



app.get('/product/:id', (req, res) => {
    const id = req.params.id

    const product = products.map(product => {
        return product.id === id
    })
})



app.get('/', (req, res) => {
    const user = {
    
        name: "Elisio",
        age: 19
    }

    const auth = true

    res.render('home', { user, auth })
})

app.listen(3000, () => {
    console.log("3000")
})