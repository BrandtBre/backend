const clientes = require('./clientesRoute');
const fornecedores = require('./fornecedoresRoute');
const enderecos = require('./enderecosRoute');
const enderecoCliente = require('./enderecosClientesRoute');
const enderecoFornecedor = require('./enderecosFornecedoresRoute');
const contasReceber = require('./contasReceberRoute');
const contasPagar = require('./contasPagarRoute');
const lancamentosReceber = require('./lancamentosReceberRoute');
const lancamentosPagar = require('./lancamentosPagarRoute');
const avgAllClientes = require('./mediaIdadeRoute');

module.exports = (app) => {
    clientes(app)
    fornecedores(app)
    enderecos(app)
    enderecoCliente(app)
    enderecoFornecedor(app)
    contasReceber(app)
    contasPagar(app)
    lancamentosReceber(app)
    lancamentosPagar(app)
    avgAllClientes(app)
}