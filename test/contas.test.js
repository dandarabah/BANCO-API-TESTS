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

    describe('GET /contas/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registros de conta do banco de dados quando o ID for válido', async () => {
          const resposta = await request(process.env.BASE_URL)
                  .get('/contas/1')
                  .set('Authorization', `Bearer ${token}`)

            console.log(resposta.body)  
            console.log(resposta.status)
            console.log(JSON.stringify(resposta.body, null, 2)); //verificação detalhada da resposta para facilitar a identificação de possíveis erros na estrutura do objeto retornado na API

            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.equal(1);
            expect(resposta.body.id).to.be.a('number');

            //validação da estrutura do objeto de resposta
            expect(resposta.body).to.include.all.keys(
            'id',
            'titular',
            'saldo',
            'ativa'
            );
        })
    })


})    