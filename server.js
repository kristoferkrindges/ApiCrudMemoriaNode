const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const listaProdutos = [
    {
        id: 1,
        nome: "PS4",
        preco: 4000
    },
    {
        id: 2,
        nome: "XBOX",
        preco: 2500
    }
]

app.get('/api/produtos', (req, res) => {
    res.json(listaProdutos)
})

app.get('/api/produtos/:id', (req, res) => {
    const id = req.params.id;

    for (const produto of listaProdutos) {
        if(produto.id == id){
            res.json(produto);
        }
    }
    res.status(404).json({"msg":"Produto nao encontrado"})
})
let idgerador = 3;
function geraId(){
    return idgerador++;
}

app.post("/api/produtos", (req, res) =>{
    let produto = req.body

    produto.id = geraId()
    listaProdutos.push(produto);

    res.status(201).json(produto)

})
/*
app.post("/api/produtos", (req, res) => {
    const { id, name, price } = req.body;

	if (!name) {
		res.status(422);
	}

	const product = {
		id,
		name,
		price,
	};

	try {
		//await
		res.status(201).json({ message: "Produto inserido com sucesso!" });
	} catch {
		res.status(500).json({ error: error });
	}
})
*/

app.put('/api/produtos/p')

app.listen(3000, () => {
    console.log("Iniciando o servidor...")
})