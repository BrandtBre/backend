const contasPagarController = require('../controllers/contasPagarController');

module.exports = (app) => {
    app.get('/contasPagar', contasPagarController.getAllContasPagar);
    app.get('/contasPagar/:id', contasPagarController.getContasPagarById);
    app.post('/contasPagar', contasPagarController.postContasPagar);
    app.delete('/contasPagar/:id', contasPagarController.deleteContasPagar);
    app.patch('/contasPagar', contasPagarController.patchContasPagar);
}