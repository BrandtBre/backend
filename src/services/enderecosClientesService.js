const db = require('../config/db')

// consultar um EnderecoClientes

const getAllEnderecosClientes = async () => {
    let sql = 'select * from enderecos_clientes';
    let enderecosClientes = await db.query(sql);
    return enderecosClientes.rows;
}

//consultar um EnderecosCLientes pela id

const getEnderecosClientesById = async (params) => {
    let sql = `select * from enderecos_clientes where id = $1`;
    let EnderecosClientes = await db.query(sql, [params.id]);
    return EnderecosClientes.rows;
}


// inserir um novo EnderecosClientes 

const postEnderecosClientes = async (params) => {
    let { id_enderecos, id_clientes } = params;
    let sql = `
        insert into enderecos_clientes (
            id_enderecos,
            id_clientes
        ) values ($1, $2) returning id;`;
    let insert = await db.query(sql, [id_enderecos, id_clientes ]);
    return insert.rows[0];
}

// atualizar o EnderecoClientes

const patchEnderecosClientes = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos_clientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um EnderecoClientes

const deleteEnderecosClientes = async (params) => {
    let sql = 'delete from enderecos_clientes where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllEnderecosClientes = getAllEnderecosClientes;
module.exports.getEnderecosClientesById = getEnderecosClientesById;
module.exports.postEnderecosClientes = postEnderecosClientes;
module.exports.deleteEnderecosClientes = deleteEnderecosClientes;
module.exports.patchEnderecosClientes = patchEnderecosClientes;