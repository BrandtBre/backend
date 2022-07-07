const lancamentosPagarService = require('../services/lancamentosPagarService');

const getAllLancamentosPagar = async (req, res) => {
    try {
        const lancamentosPagar = await lancamentosPagarService.getAllLancamentosPagar();
        res.status(200).send(lancamentosPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getLancamentosPagarById = async (req, res) => {
    try {
        const lancamentosPagar = await lancamentosPagarService.getLancamentosPagarById(req.params);
        res.status(200).send(lancamentosPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const postLancamentosPagar = async (req, res) => {
    try {
        const lancamentosPagar = await lancamentosPagarService.postLancamentosPagar(req.body);
        res.status(200).send(lancamentosPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const patchLancamentosPagar = async (req, res) => {
    try {
        const lancamentosPagar = await lancamentosPagarService.patchLancamentosPagar(req.body);
        res.status(201).send(lancamentosPagar);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteLancamentosPagar = async (req, res) => {
    try {
        let deletado = await lancamentosPagarService.deleteLancamentosPagar(req.params);
        let msg = deletado 
            ? `lancamentosPagar ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum lancamentosPagar com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllLancamentosPagar = getAllLancamentosPagar;
module.exports.getLancamentosPagarById = getLancamentosPagarById;
module.exports.postLancamentosPagar = postLancamentosPagar;
module.exports.patchLancamentosPagar = patchLancamentosPagar;
module.exports.deleteLancamentosPagar = deleteLancamentosPagar;

