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

exports.listar = (req, res) => {
    res.json(listaProdutos)
}

exports.searchId =  (req, res) => {
    const id = req.params.id;
    for (const produto of listaProdutos) {
        if(produto.id == id){
            res.json(produto);
        }
    }
    res.status(404).json({"msg":"Produto nao encontrado"})
}

exports.add = (req, res) =>{
    let produto = req.body

    produto.id = geraId()
    listaProdutos.push(produto);

    res.status(201).json(produto)

}

exports.remove = (req, res) =>{
    const id = req.params.id;
    for (var i = 0; i < listaProdutos.length; i++){
        if (listaProdutos[i].id = id){
            listaProdutos.splice(i, 1)
            res.status(201).json(listaProdutos)
        }
    }
    res.status(404).json({"msg":"Produto nao encontrado"})
}

exports.change = (req, res) =>{
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
}

let idgerador = 3;
function geraId(){
    return idgerador++;
}

//module.exports = { listar }