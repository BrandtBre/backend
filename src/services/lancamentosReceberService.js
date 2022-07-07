const db = require('../config/db');

// consultar um lancamentosReceber 

const getAllLancamentosReceber = async () => {
    let sql = 'select * from lancamentos_receber';
    let lancamentosReceber = await db.query(sql);
    return lancamentosReceber.rows;
}

//consultar um lancamentosReceber pela id

const getLancamentosReceberById = async (params) => {
    let sql = `select * from lancamentos_receber where id = $1`;
    let lancamentosReceber = await db.query(sql, [params.id]);
    return lancamentosReceber.rows;
}


// inserir um novo lancamentosReceber 

const postLancamentosReceber = async (params) => {
    let { id_contas_receber, valor} = params;
    let sql = `
        insert into lancamentos_receber (
            id_contas_receber,
            valor
        ) values ($1, $2) returning id;`;
    let insert = await db.query(sql, [id_contas_receber, valor]);
    return insert.rows[0];
}

// atualizar o lancamentosReceber 

const patchLancamentosReceber = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update lancamentos_receber set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um lancamentosReceber 

const deleteLancamentosReceber = async (params) => {
    let sql = 'delete from lancamentos_receber where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllLancamentosReceber = getAllLancamentosReceber;
module.exports.getLancamentosReceberById = getLancamentosReceberById;
module.exports.postLancamentosReceber = postLancamentosReceber;
module.exports.deleteLancamentosReceber = deleteLancamentosReceber;
module.exports.patchLancamentosReceber = patchLancamentosReceber;