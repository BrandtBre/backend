const db = require('../config/db');

// consultar um contasReceber 

const getAllContasReceber = async () => {
    let sql = 'select * from contas_receber';
    let contasReceber = await db.query(sql);
    return contasReceber.rows;
}

//consultar um contasReceber pela id

const getContasReceberById = async (params) => {
    let sql = `select * from contas_receber where id = $1`;
    let contasReceber = await db.query(sql, [params.id]);
    return contasReceber.rows;
}


// inserir um novo contasReceber 

const postContasReceber = async (params) => {
    let { id_clientes, vencimento, emissao, situacao} = params;
    let sql = `
        insert into contas_receber (
            id_clientes,
            vencimento,
            emissao,
            situacao
        ) values ($1, $2, $3, $4) returning id;`;
    let insert = await db.query(sql, [id_clientes, vencimento, emissao, situacao]);
    return insert.rows[0];
}

// atualizar o contasReceber 

const patchContasReceber = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update contas_receber set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um contasReceber 

const deleteContasReceber = async (params) => {
    let sql = 'delete from contas_receber where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllContasReceber = getAllContasReceber;
module.exports.getContasReceberById = getContasReceberById;
module.exports.postContasReceber = postContasReceber;
module.exports.deleteContasReceber = deleteContasReceber;
module.exports.patchContasReceber = patchContasReceber;