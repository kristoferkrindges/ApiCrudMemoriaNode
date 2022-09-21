const express = require('express')
const router = express.Router()

const controller = require("../Controller/product_controller")

// GET
router.get('/', controller.listar)
// GET ID
router.get('/:id', controller.searchId)
// POST
router.post("/", controller.add)
// DELETE
router.delete("/:id", controller.remove)
// PUT
router.put("/:id", controller.change)


//router.put('/')

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

module.exports = router;