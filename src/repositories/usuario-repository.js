'use strict';

const mydb = require('../shared/connections');
const Usuario = mydb.Usuario;

exports.get = async(codigo) => {
    var res;
    if(codigo == -1){
        res = await Usuario.findAll();
    }else {
        res = await Usuario.findOne({
            where: {
                USR_ID: codigo
            }
        });
    }
    return res;
}

exports.create = async(data) =>{
    Usuario.create({USR_ID: 4, USR_EMAIL: 'teste2@teste2', USR_SENHA: 1234})
    return await Usuario.create(data);
}

exports.put = async(id, data) =>{
    var res = await Usuario.update(
        data,
        {
            where: {
                USR_ID: id
            }
        });
    return res;
}