const enderecosClientesController = require('../controllers/enderecosClientesController');

module.exports = (app) => {
    app.get('/enderecoCLiente', enderecosClientesController.getAllEnderecosClientes);
    app.get('/enderecoCliente/:id', enderecosClientesController.getEnderecosClientesById);
    app.post('/enderecoCliente', enderecosClientesController.postEnderecosClientes);
    app.delete('/enderecoCliente/:id', enderecosClientesController.deleteEnderecosClientes);
    app.patch('/enderecoCliente', enderecosClientesController.patchEnderecosClientes);
}
