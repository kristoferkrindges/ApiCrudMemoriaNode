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
// GET
app.get('/api/produtos', (req, res) => {
    res.json(listaProdutos)
})
// GET ID
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
// POST
app.post("/api/produtos", (req, res) =>{
    let produto = req.body

    produto.id = geraId()
    listaProdutos.push(produto);

    res.status(201).json(produto)

})
// DELETE
app.delete("/api/produtos/:id", (req, res) =>{
    const id = req.params.id;
    for (var i = 0; i < listaProdutos.length; i++){
        if (listaProdutos[i].id = id){
            listaProdutos.splice(i, 1)
            res.status(201).json(listaProdutos)
        }
    }
    res.status(404).json({"msg":"Produto nao encontrado"})
})
// PUT
app.put("/api/produtos/:id", (req, res) =>{
    const id = req.params.id;
    const produtoAtualizado = req.body;

    let produto = listaProdutos.find(produto => produto.id = id);
    if(produto){
        if(produtoAtualizado.nome)
            produto.nome = produtoAtualizado.nome;
        if(produtoAtualizado.preco)
            produto.preco = produtoAtualizado.preco;
        res.json(produto)
    }else{
        res.status(404).json({"msg":"Produto nao encontrado"})
    }
})

/*
app.delete("/api/produtos/:id", (req, res) =>{
    const id = req.param.id;
    const remover = listaProdutos.findIndex(produto => produto.id = id);
    
    if (remover >= 0){
        listaProdutos.splice(remover, 1);
    }else{
        
    }
});
*/
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