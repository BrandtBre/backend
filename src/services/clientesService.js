const db = require('../config/db');

// consultar um cliente 

const getAllClientes = async () => {
    let sql = 'select * from clientes';
    let clientes = await db.query(sql);
    return clientes.rows;
}

//consultar um cliente pela id

const getClientById = async (params) => {
    let sql = `select * from clientes where id = $1`;
    let cliente = await db.query(sql, [params.id]);
    return cliente.rows;
}


// inserir um novo cliente 

const postCliente = async (params) => {
    let { nome, email, rg, cpf, telefone, celular, data_nascimento} = params;
    let sql = `
        insert into clientes (
            nome,
            email, 
            rg,
            cpf,
            telefone,
            celular,
            data_nascimento
        ) values ($1, $2, $3, $4, $5, $6, $7) returning id;`;
    let insert = await db.query(sql, [nome, email, rg, cpf, telefone, celular, data_nascimento]);
    return insert.rows[0];
}

// atualizar o cliente 

const patchCliente = async (params) => {
    console.log(params)
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update clientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

// deletar um cliente 

const deleteCliente = async (params) => {
    let sql = 'delete from clientes where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}


module.exports.getAllClientes = getAllClientes;
module.exports.getClientById = getClientById;
module.exports.postCliente = postCliente;
module.exports.deleteCliente = deleteCliente;
module.exports.patchCliente = patchCliente;