const db = require('../config/db')

// consultar um fornecedor 

const getAllFornecedores = async () => {
    let sql = 'select * from fornecedores';
    let fornecedores = await db.query(sql);
    return fornecedores.rows;
}

//consultar um fornecedor pela id

const getFornecedorById = async (params) => {
    let sql = `select * from fornecedores where id = $1`;
    let fornecedor = await db.query(sql, [params.id]);
    return fornecedor.rows;
}


// inserir um novo fornecedor 

const postFornecedor = async (params) => {
    let { nome, cnpj, inscricao_estadual, data_abertura, website, email, telefone, celular } = params;
    let sql = `
        insert into fornecedores (
            nome,
            cnpj,
            inscricao_estadual,
            data_abertura,
            website,
            email,
            telefone,
            celular
        ) values ($1, $2, $3, $4, $5, $6, $7, $8) returning id;`;
    let insert = await db.query(sql, [nome, cnpj, inscricao_estadual, data_abertura, website, email, telefone, celular ]);
    return insert.rows[0];
}

// atualizar o fornecedor 

const patchFornecedor = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update fornecedores set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um fornecedor 

const deleteFornecedor = async (params) => {
    let sql = 'delete from fornecedores where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllFornecedores = getAllFornecedores;
module.exports.getFornecedorById = getFornecedorById;
module.exports.postFornecedor = postFornecedor;
module.exports.deleteFornecedor = deleteFornecedor;
module.exports.patchFornecedor = patchFornecedor;