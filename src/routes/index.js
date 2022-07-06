const clientes = require('./clientesRoute');
const fornecedores = require('./fornecedoresRoute');
const enderecos = require('./enderecosRoute')

module.exports = (app) => {
    clientes(app)
    fornecedores(app)
    enderecos(app)
}