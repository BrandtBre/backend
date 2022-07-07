const db = require('../config/db');

// consultar um contasPagar 

const getAllContasPagar = async () => {
    let sql = 'select * from contas_pagar';
    let contasPagar = await db.query(sql);
    return contasPagar.rows;
}

//consultar um contasPagar pela id

const getContasPagarById = async (params) => {
    let sql = `select * from contas_pagar where id = $1`;
    let contasPagar = await db.query(sql, [params.id]);
    return contasPagar.rows;
}


// inserir um novo contasPagar 

const postContasPagar = async (params) => {
    let { id_fornecedores, vencimento, emissao, situacao} = params;
    let sql = `
        insert into contas_pagar (
            id_fornecedores,
            vencimento,
            emissao,
            situacao
        ) values ($1, $2, $3, $4) returning id;`;
    let insert = await db.query(sql, [id_fornecedores, vencimento, emissao, situacao]);
    return insert.rows[0];
}

// atualizar o contasPagar 

const patchContasPagar = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update contas_pagar set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um contasPagar 

const deleteContasPagar = async (params) => {
    let sql = 'delete from contas_pagar where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllContasPagar = getAllContasPagar;
module.exports.getContasPagarById = getContasPagarById;
module.exports.postContasPagar = postContasPagar;
module.exports.deleteContasPagar = deleteContasPagar;
module.exports.patchContasPagar = patchContasPagar;