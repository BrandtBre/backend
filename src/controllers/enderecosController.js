const enderecosService = require('../services/enderecosService');

const getAllEnderecos = async (req, res) => {
    try {
        const enderecos = await enderecosService.getAllEnderecos();
        res.status(200).send(enderecos);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getEnderecoById = async (req, res) => {
    try {
        const Endereco = await enderecosService.getEnderecoById(req.params);
        res.status(200).send(Endereco);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postEndereco = async (req, res) => {
    try {
        const Endereco = await enderecosService.postEndereco(req.body);
        res.status(200).send(Endereco);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchEndereco = async (req, res) => {
    try {
        const Endereco = await enderecosService.patchEndereco(req.body);
        res.status(201).send(Endereco);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteEndereco = async (req, res) => {
    try {
        let deletado = await enderecosService.deleteEndereco(req.params);
        let msg = deletado 
            ? `Endereco ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum Endereco com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.postEndereco = postEndereco;
module.exports.patchEndereco = patchEndereco;
module.exports.deleteEndereco = deleteEndereco;

