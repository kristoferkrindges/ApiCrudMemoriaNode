const express = require('express')
const app = express()

const productRouter = require('./Routes/product_routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use("/api/produtos", productRouter)
// Porta para comunicação do servidor
app.listen(3000, () => {
    console.log("Iniciando o servidor...")
})