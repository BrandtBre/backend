const clientesControllers = require('../controllers/clientesControllers');

module.exports = (app) => {
    app.get('/clientes', clientesControllers.getAllClientes);
    app.get('/clientes/:id', clientesControllers.getClientById);
    app.post('/clientes', clientesControllers.postCliente);
    app.delete('/clientes/:id', clientesControllers.deleteCliente);
    app.patch('/clientes', clientesControllers.patchCliente);
}