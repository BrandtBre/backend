const mediaIdadeService = require('../services/mediaIdadeService');

const avgAllClientes = async (req, res) => {
    try {
        const avgAllClientes = await mediaIdadeService.avgAllClientes();
        res.status(200).send(avgAllClientes);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.avgAllClientes = avgAllClientes;
