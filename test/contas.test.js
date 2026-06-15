const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')


describe('Contas', () => {
    let token

    beforeEach( async () => {
            token =  await obterToken('Lia.Rosa', '425133')
    })

    describe('GET /contas', () => {
  
      it('Deve retornar sucesso com 200 uma com lista bancária e com a paginação',  async () => {
          const resposta = await request(process.env.BASE_URL)
                  .get('/contas?page=1&limit=10')
                  .set('Authorization', `Bearer ${token}`)

            console.log(resposta.body)  
            console.log(resposta.status)

            expect(resposta.status).to.equal(200);
            expect(resposta.body.contas).to.be.an('array'); //verifica a quantidade de registros retornados que é no máximo 10
            expect(resposta.body.contas.length).to.be.at.most(10); //verifica a quantidade de elementos no array de contas, que deve ser menor ou igual a 10

            //validação da estrutura do objeto de resposta
            expect(resposta.body.contas[0]).to.include.all.keys(
            'id',
            'titular',
            'saldo',
            'ativa'
            );
        })
    })














})    