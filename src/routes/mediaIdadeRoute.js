const mediaIdadeController = require('../controllers/mediaIdadeController');

module.exports = (app) => {
    app.get('/avgAllClientes', mediaIdadeController.avgAllClientes);
}