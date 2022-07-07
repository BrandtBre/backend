const db = require('../config/db')

// consultar um EnderecoFornecedores

const getAllEnderecosFornecedores = async () => {
    let sql = 'select * from enderecos_fornecedores';
    let enderecosFornecedores = await db.query(sql);
    return enderecosFornecedores.rows;
}

//consultar um EnderecosFornecedores pela id

const getEnderecosFornecedoresById = async (params) => {
    let sql = `select * from enderecos_fornecedores where id = $1`;
    let EnderecosFornecedores = await db.query(sql, [params.id]);
    return EnderecosFornecedores.rows;
}


// inserir um novo EnderecosFornecedores 

const postEnderecosFornecedores = async (params) => {
    let { id_enderecos, id_fornecedores } = params;
    let sql = `
        insert into enderecos_fornecedores (
            id_enderecos,
            id_fornecedores
        ) values ($1, $2) returning id;`;
    let insert = await db.query(sql, [id_enderecos, id_fornecedores ]);

    return insert.rows[0];
}

// atualizar o EnderecoFornecedores

const patchEnderecosFornecedores = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos_fornecedores set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um EnderecoFornecedores

const deleteEnderecosFornecedores = async (params) => {
    let sql = 'delete from enderecos_fornecedores where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllEnderecosFornecedores = getAllEnderecosFornecedores;
module.exports.getEnderecosFornecedoresById = getEnderecosFornecedoresById;
module.exports.postEnderecosFornecedores = postEnderecosFornecedores;
module.exports.deleteEnderecosFornecedores = deleteEnderecosFornecedores;
module.exports.patchEnderecosFornecedores = patchEnderecosFornecedores;