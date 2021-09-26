'use strict';

const repository = require('../repositories/usuario-repository');
const md5 = require('md5');

exports.get = async(req, res, next) => {
    const codigo = req.params.id;
    try {
        var data = await repository.get(codigo);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.post = async(req, res, next) => {
     Usuario.create({USR_ID: 4, USR_EMAIL: 'teste2@teste2', USR_SENHA: 1234 });
     console.log(    req.body.USR_ID);
     console.log( '\''+   req.body.USR_EMAIL + '\'');
     console.log(    md5(req.body.USR_SENHA + 'fitosollos'));
     console.log(req.body);
    try {
        var data = await repository.create(req.body);
         var dados = await repository.create({
             USR_ID: req.body.USR_ID,
             USR_EMAIL:  '\''+ req.body.USR_EMAIL  + '\'' ,
             USR_SENHA:  '\''+ md5(req.body.USR_SENHA) + '\''
         });
        res.status(201).send({
            message: 'OK'
        });
    } catch (e) {
        res.status(400).send({
            message: 'NOK',
            data: e
        });
    }
}


exports.put = async(req, res, next) => {
    // {"USR_ID": 1, "USR_EMAIL": "aaaaaaaaaaaaaaGGGGGGG", "USR_SENHA": 1234}
    const id = req.params.id;
    var body = req.body;
    try {
        var data = await repository.put(id, body)
        res.status(201).send({
            message: 'OK'
        });
    } catch (e) {
        res.status(400).send({
            message: 'NOK',
            data: e
        });
    }
}

exports.delete = async (req, res, next) => {
    const id = req.params.id;
    try {
        var data = await repository.delete(id);
        res.status(201).send({
            message: 'OK'
        });
    } catch (e) {
        res.status(400).send({
            message: 'NOK',
            data: e
        });
    }

}