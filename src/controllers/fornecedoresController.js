const fornecedoresService = require('../services/fornecedoresService');

const getAllFornecedores = async (req, res) => {
    try {
        const fornecedores = await fornecedoresService.getAllFornecedores();
        res.status(200).send(fornecedores);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getFornecedorById = async (req, res) => {
    try {
        const fornecedor = await fornecedoresService.getFornecedorById(req.params);
        res.status(200).send(fornecedor);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postFornecedor = async (req, res) => {
    try {
        const fornecedor = await fornecedoresService.postFornecedor(req.body);
        res.status(200).send(fornecedor);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchFornecedor = async (req, res) => {
    try {
        const fornecedor = await fornecedoresService.patchFornecedor(req.body);
        res.status(201).send(fornecedor);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteFornecedor = async (req, res) => {
    try {
        let deletado = await fornecedoresService.deleteFornecedor(req.params);
        let msg = deletado 
            ? `Fornecedor ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum fornecedor com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(err);
    }
}

module.exports.getAllFornecedores = getAllFornecedores;
module.exports.getFornecedorById = getFornecedorById;
module.exports.postFornecedor = postFornecedor;
module.exports.patchFornecedor = patchFornecedor;
module.exports.deleteFornecedor = deleteFornecedor;

