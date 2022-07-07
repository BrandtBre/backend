const enderecosFornecedoresService = require('../services/enderecosFornecedoresService');

const getAllEnderecosFornecedores = async (req, res) => {
    try {
        const enderecosFornecedores = await enderecosFornecedoresService.getAllEnderecosFornecedores();
        res.status(200).send(enderecosFornecedores);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getEnderecosFornecedoresById = async (req, res) => {
    try {
        const EnderecosFornecedores = await enderecosFornecedoresService.getEnderecosFornecedoresById(req.params);
        res.status(200).send(EnderecosFornecedores);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postEnderecosFornecedores = async (req, res) => {
    try {
        const EnderecosFornecedores = await enderecosFornecedoresService.postEnderecosFornecedores(req.body);
        res.status(200).send(EnderecosFornecedores);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchEnderecosFornecedores = async (req, res) => {
    try {
        const EnderecoFornecedores = await enderecosFornecedoresService.patchEnderecosFornecedores(req.body);
        res.status(201).send(EnderecoFornecedores);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteEnderecosFornecedores = async (req, res) => {
    try {
        let deletado = await enderecosFornecedoresService.deleteEnderecosFornecedores(req.params);
        let msg = deletado 
            ? `Endereco_fornecedor ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum Endereco_fornecedor com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllEnderecosFornecedores = getAllEnderecosFornecedores;
module.exports.getEnderecosFornecedoresById = getEnderecosFornecedoresById;
module.exports.postEnderecosFornecedores = postEnderecosFornecedores;
module.exports.patchEnderecosFornecedores = patchEnderecosFornecedores;
module.exports.deleteEnderecosFornecedores = deleteEnderecosFornecedores;

