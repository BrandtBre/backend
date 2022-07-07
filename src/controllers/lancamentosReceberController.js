const lancamentosReceberService = require('../services/lancamentosReceberService');

const getAllLancamentosReceber = async (req, res) => {
    try {
        const lancamentosReceber = await lancamentosReceberService.getAllLancamentosReceber();
        res.status(200).send(lancamentosReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getLancamentosReceberById = async (req, res) => {
    try {
        const lancamentosReceber = await lancamentosReceberService.getLancamentosReceberById(req.params);
        res.status(200).send(lancamentosReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postLancamentosReceber = async (req, res) => {
    try {
        const lancamentosReceber = await lancamentosReceberService.postLancamentosReceber(req.body);
        res.status(200).send(lancamentosReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchLancamentosReceber = async (req, res) => {
    try {
        const lancamentosReceber = await lancamentosReceberService.patchLancamentosReceber(req.body);
        res.status(201).send(lancamentosReceber);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteLancamentosReceber = async (req, res) => {
    try {
        let deletado = await lancamentosReceberService.deleteLancamentosReceber(req.params);
        let msg = deletado 
            ? `lancamentosReceber ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum lancamentosReceber com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllLancamentosReceber = getAllLancamentosReceber;
module.exports.getLancamentosReceberById = getLancamentosReceberById;
module.exports.postLancamentosReceber = postLancamentosReceber;
module.exports.patchLancamentosReceber = patchLancamentosReceber;
module.exports.deleteLancamentosReceber = deleteLancamentosReceber;

