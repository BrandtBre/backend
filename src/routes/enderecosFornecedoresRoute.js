const enderecosFornecedoresController = require('../controllers/enderecosFornecedoresController');

module.exports = (app) => {
    app.get('/enderecoFornecedor', enderecosFornecedoresController.getAllEnderecosFornecedores);
    app.get('/enderecoFornecedor/:id', enderecosFornecedoresController.getEnderecosFornecedoresById);
    app.post('/enderecoFornecedor', enderecosFornecedoresController.postEnderecosFornecedores);
    app.delete('/enderecoFornecedor/:id', enderecosFornecedoresController.deleteEnderecosFornecedores);
    app.patch('/enderecoFornecedor', enderecosFornecedoresController.patchEnderecosFornecedores);
}
