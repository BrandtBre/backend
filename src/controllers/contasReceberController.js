const contasReceberService = require('../services/contasReceberService');

const getAllContasReceber = async (req, res) => {
    try {
        const contasReceber = await contasReceberService.getAllContasReceber();
        res.status(200).send(contasReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getContasReceberById = async (req, res) => {
    try {
        const contasReceber = await contasReceberService.getContasReceberById(req.params);
        res.status(200).send(contasReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postContasReceber = async (req, res) => {
    try {
        const contasReceber = await contasReceberService.postContasReceber(req.body);
        res.status(200).send(contasReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchContasReceber = async (req, res) => {
    try {
        const contasReceber = await contasReceberService.patchContasReceber(req.body);
        res.status(201).send(contasReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteContasReceber = async (req, res) => {
    try {
        let deletado = await contasReceberService.deleteContasReceber(req.params);
        let msg = deletado 
            ? `ContasReceber ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum contasReceber com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(err);
    }
}

module.exports.getAllContasReceber = getAllContasReceber;
module.exports.getContasReceberById = getContasReceberById;
module.exports.postContasReceber = postContasReceber;
module.exports.patchContasReceber = patchContasReceber;
module.exports.deleteContasReceber = deleteContasReceber;

