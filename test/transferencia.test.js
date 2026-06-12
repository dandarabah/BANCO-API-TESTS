const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require ('../fixtures/postTransferencias.json')

describe('Transferencias', () => {
    let token

    beforeEach( async () => {
            token =  await obterToken('Lia.Rosa', '425133')
    })

    describe('POST /transferencias', () => {
  
      it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10,00 ',  async () => {
        const bodyTransferencias = { ...postTransferencias } //fixtures clonado

        const resposta = await request(process.env.BASE_URL)
          .post('/transferencias')
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .send(bodyTransferencias)

          expect(resposta.status).to.equal(201);
          console.log(resposta.body)
      })

      it('Deve retornar falha com 422 quando o valor da transferencia for abaixo de R$10,00 ', async () => {
          const bodyTransferencias = {...postTransferencias} //fixtures clonado
          bodyTransferencias.valor = 7

          const resposta = await request ('http://localhost:3000')
              .post('/transferencias')
              .set('Content-Type', 'application/json')
              .set('Authorization', `Bearer ${token}`)
              .send(bodyTransferencias)
              expect(resposta.status).to.equal(422);  
      })
   })

  describe('GET /transferencias/{id}', () => {
    it('Deve retornar sucesso com 200 e dados iguais ao registros de tranferencia do banco de dados quando o ID for válido', async () => {
      const resposta = await request(process.env.BASE_URL)
          .get('/transferencias/15')
          .set('Authorization', `Bearer ${token}`)

        console.log(resposta.body)  
        console.log(resposta.status)
        
        expect(resposta.status).to.equal(200);
        expect(resposta.body.id).to.equal(15);
        expect(resposta.body.id).to.be.a('number');  //identificação do tipo de dado      
        expect(resposta.body.conta_origem_id).to.equal(3);
        expect(resposta.body.conta_destino_id).to.equal(2);
        expect(resposta.body.valor).to.equal(100.00);
    })
  })

  describe('GET /transferencias', () => { 
    it('Deve retornar elementos na paginação quando informar limite de registros', async () => { 
      const resposta = await request(process.env.BASE_URL)
          .get('/transferencias?page=1&limit10')
          .set('Authorization', `Bearer ${token}`)
        
        console.log(resposta.body)  
        console.log(resposta.status)

        expect(resposta.status).to.equal(200);
        expect(resposta.body.limit).to.equal(10); //verificar se o número de registros retornados é no máximo 10
        expect(resposta.body.transferencias).to.have.lengthOf(10); //verificar se o campo transferencias é um array
    })

  })








})