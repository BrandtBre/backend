const lancamentosReceberController = require('../controllers/lancamentosReceberController');

module.exports = (app) => {
    app.get('/LancamentosReceber', lancamentosReceberController.getAllLancamentosReceber);
    app.get('/LancamentosReceber/:id', lancamentosReceberController.getLancamentosReceberById);
    app.post('/LancamentosReceber', lancamentosReceberController.postLancamentosReceber);
    app.delete('/LancamentosReceber/:id', lancamentosReceberController.deleteLancamentosReceber);
    app.patch('/LancamentosReceber', lancamentosReceberController.patchLancamentosReceber);
}