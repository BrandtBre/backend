const contasPagarService = require('../services/contasPagarService');

const getAllContasPagar = async (req, res) => {
    try {
        const contasPagar = await contasPagarService.getAllContasPagar();
        res.status(200).send(contasPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getContasPagarById = async (req, res) => {
    try {
        const contasPagar = await contasPagarService.getContasPagarById(req.params);
        res.status(200).send(contasPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postContasPagar = async (req, res) => {
    try {
        const contasPagar = await contasPagarService.postContasPagar(req.body);
        res.status(200).send(contasPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchContasPagar = async (req, res) => {
    try {
        const contasPagar = await contasPagarService.patchContasPagar(req.body);
        res.status(201).send(contasPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteContasPagar = async (req, res) => {
    try {
        let deletado = await contasPagarService.deleteContasPagar(req.params);
        let msg = deletado 
            ? `ContasPagar ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum contasPagar com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllContasPagar = getAllContasPagar;
module.exports.getContasPagarById = getContasPagarById;
module.exports.postContasPagar = postContasPagar;
module.exports.patchContasPagar = patchContasPagar;
module.exports.deleteContasPagar = deleteContasPagar;

