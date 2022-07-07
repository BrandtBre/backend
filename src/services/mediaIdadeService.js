const db = require('../config/db');

const avgAllClientes = async () => {
    let sql = `
    SELECT * from vw_media_idade
    `; 
    let mediaIdade = await db.query(sql);
    return mediaIdade.rows;
}

module.exports.avgAllClientes = avgAllClientes;