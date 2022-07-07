const db = require('../config/db');

// consultar um lancamentosPagar 

const getAllLancamentosPagar = async () => {
    let sql = 'select * from lancamentos_pagar';
    let lancamentosPagar = await db.query(sql);
    return lancamentosPagar.rows;
}

//consultar um lancamentosPagar pela id

const getLancamentosPagarById = async (params) => {
    let sql = `select * from lancamentos_pagar where id = $1`;
    let lancamentosPagar = await db.query(sql, [params.id]);
    return lancamentosPagar.rows;
}


// inserir um novo lancamentosPagar 

const postLancamentosPagar = async (params) => {
    let { id_contas_pagar, valor} = params;
    let sql = `
        insert into lancamentos_pagar (
            id_contas_pagar,
            valor
        ) values ($1, $2) returning id;`;
    let insert = await db.query(sql, [id_contas_pagar, valor]);
    return insert.rows[0];
}

// atualizar o lancamentosPagar 

const patchLancamentosPagar = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update lancamentos_pagar set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um lancamentosPagar 

const deleteLancamentosPagar = async (params) => {
    let sql = 'delete from lancamentos_pagar where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllLancamentosPagar = getAllLancamentosPagar;
module.exports.getLancamentosPagarById = getLancamentosPagarById;
module.exports.postLancamentosPagar = postLancamentosPagar;
module.exports.deleteLancamentosPagar = deleteLancamentosPagar;
module.exports.patchLancamentosPagar = patchLancamentosPagar;