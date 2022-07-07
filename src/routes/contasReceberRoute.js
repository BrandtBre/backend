const contasReceberController = require('../controllers/contasReceberController');

module.exports = (app) => {
    app.get('/contasReceber', contasReceberController.getAllContasReceber);
    app.get('/contasReceber/:id', contasReceberController.getContasReceberById);
    app.post('/contasReceber', contasReceberController.postContasReceber);
    app.delete('/contasReceber/:id', contasReceberController.deleteContasReceber);
    app.patch('/contasReceber', contasReceberController.patchContasReceber);
}