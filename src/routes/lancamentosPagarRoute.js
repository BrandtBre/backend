const lancamentosPagarController = require('../controllers/lancamentosPagarController');

module.exports = (app) => {
    app.get('/LancamentosPagar', lancamentosPagarController.getAllLancamentosPagar);
    app.get('/LancamentosPagar/:id', lancamentosPagarController.getLancamentosPagarById);
    app.post('/LancamentosPagar', lancamentosPagarController.postLancamentosPagar);
    app.delete('/LancamentosPagar/:id', lancamentosPagarController.deleteLancamentosPagar);
    app.patch('/LancamentosPagar', lancamentosPagarController.patchLancamentosPagar);
}