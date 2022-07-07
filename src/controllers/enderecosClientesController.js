const enderecosClientesService = require('../services/enderecosClientesService');

const getAllEnderecosClientes = async (req, res) => {
    try {
        const enderecosClientes = await enderecosClientesService.getAllEnderecosClientes();
        res.status(200).send(enderecosClientes);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getEnderecosClientesById = async (req, res) => {
    try {
        const EnderecosClientes = await enderecosClientesService.getEnderecosClientesById(req.params);
        res.status(200).send(EnderecosClientes);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postEnderecosClientes = async (req, res) => {
    try {
        const EnderecosClientes = await enderecosClientesService.postEnderecosClientes(req.body);
        res.status(200).send(EnderecosClientes);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchEnderecosClientes = async (req, res) => {
    try {
        const Endereco = await enderecosClientesService.patchEnderecosClientes(req.body);
        res.status(201).send(Endereco);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteEnderecosClientes = async (req, res) => {
    try {
        let deletado = await enderecosClientesService.deleteEnderecosClientes(req.params);
        let msg = deletado 
            ? `Endereco ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum Endereco com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllEnderecosClientes = getAllEnderecosClientes;
module.exports.getEnderecosClientesById = getEnderecosClientesById;
module.exports.postEnderecosClientes = postEnderecosClientes;
module.exports.patchEnderecosClientes = patchEnderecosClientes;
module.exports.deleteEnderecosClientes = deleteEnderecosClientes;

