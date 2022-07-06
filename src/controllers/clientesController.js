const clientesService = require('../services/clientesService');

const getAllClientes = async (req, res) => {
    try {
        const clientes = await clientesService.getAllClientes();
        res.status(200).send(clientes);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getClientById = async (req, res) => {
    try {
        const cliente = await clientesService.getClientById(req.params);
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postCliente = async (req, res) => {
    try {
        const cliente = await clientesService.postCliente(req.body);
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchCliente = async (req, res) => {
    try {
        const cliente = await clientesService.patchCliente(req.body);
        res.status(201).send(cliente);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteCliente = async (req, res) => {
    try {
        let deletado = await clientesService.deleteCliente(req.params);
        let msg = deletado 
            ? `Cliente ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum cliente com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(err);
    }
}

module.exports.getAllClientes = getAllClientes;
module.exports.getClientById = getClientById;
module.exports.postCliente = postCliente;
module.exports.patchCliente = patchCliente;
module.exports.deleteCliente = deleteCliente;

