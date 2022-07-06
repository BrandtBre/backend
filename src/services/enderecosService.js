const db = require('../config/db')

// consultar um Endereco 

const getAllEnderecos = async () => {
    let sql = 'select * from enderecos';
    let enderecos = await db.query(sql);
    return enderecos.rows;
}

//consultar um Endereco pela id

const getEnderecoById = async (params) => {
    let sql = `select * from enderecos where id = $1`;
    let Endereco = await db.query(sql, [params.id]);
    return Endereco.rows;
}


// inserir um novo Endereco 

const postEndereco = async (params) => {
    let { numero, cidade, estado, rua, bairro, cep } = params;
    let sql = `
        insert into enderecos (
            numero,
            cidade,
            estado,
            rua,
            bairro,
            cep
        ) values ($1, $2, $3, $4, $5, $6) returning id;`;
    let insert = await db.query(sql, [numero, cidade, estado, rua, bairro, cep ]);
    return insert.rows[0];
}

// atualizar o Endereco 

const patchEndereco = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um Endereco 

const deleteEndereco = async (params) => {
    let sql = 'delete from enderecos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.postEndereco = postEndereco;
module.exports.deleteEndereco = deleteEndereco;
module.exports.patchEndereco = patchEndereco;