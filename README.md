[README_BANCO_API_TESTS.md](https://github.com/user-attachments/files/28895634/README_BANCO_API_TESTS.md)
# BANCO-API-TESTS

## Sobre o Projeto

O **BANCO-API-TESTS** é um projeto de automação de testes de API REST desenvolvido em JavaScript para validar os endpoints da API **banco-api**.

O objetivo deste projeto é contribuir com a qualidade, confiabilidade e integridade dos serviços disponibilizados pela API, utilizando testes automatizados que validam regras de negócio, códigos de resposta, estrutura de payloads e comportamento dos endpoints.

## Projeto Testado

- API: https://github.com/juliodelimas/banco-api

## Stack Utilizada

### Linguagem

- JavaScript (Node.js)

### Frameworks e Bibliotecas

- Mocha
- Chai
- Supertest
- Mochawesome

> Consulte o arquivo `package.json` para visualizar todas as dependências e respectivas versões utilizadas pelo projeto.

---

## Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

- Node.js (versão LTS recomendada)
- npm
- Git

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/dandarabah/BANCO-API-TESTS.git
```

Acesse a pasta do projeto:

```bash
cd BANCO-API-TESTS
```

Instale as dependências:

```bash
npm install
```

---

## Configuração do Ambiente

O projeto utiliza variáveis de ambiente através de um arquivo `.env`.

Crie um arquivo chamado `.env` na raiz do projeto contendo:

```env
BASE_URL=http://localhost:3000
```

### Variáveis Disponíveis

| Variável | Descrição |
|-----------|-----------|
| BASE_URL | URL base da API que será testada |

Exemplo:

```env
BASE_URL=http://localhost:3000
```

---

## Estrutura de Diretórios

Exemplo de organização do projeto:

```text
BANCO-API-TESTS
│
├── test/
│   ├── accounts/
│   ├── auth/
│   ├── transfers/
│   └── users/
│
├── support/
│   ├── data/
│   ├── helpers/
│   └── services/
│
├── mochawesome/
│
├── .env
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura acima pode variar conforme a evolução do projeto.

---

## Execução dos Testes

Executar todos os testes:

```bash
npm test
```

ou

```bash
npx mocha
```

Caso existam scripts específicos definidos no `package.json`, eles também poderão ser executados através de:

```bash
npm run <nome-do-script>
```

---

## Relatórios de Execução

O projeto utiliza o **Mochawesome** para geração de relatórios HTML.

Após a execução dos testes, os relatórios serão gerados no diretório:

```text
mochawesome/
```

Normalmente serão disponibilizados arquivos como:

```text
mochawesome-report/
mochawesome.html
mochawesome.json
```

Para visualizar o relatório:

1. Execute os testes.
2. Acesse a pasta gerada pelo Mochawesome.
3. Abra o arquivo `.html` em seu navegador.

---

## Boas Práticas

- Mantenha o arquivo `.env` fora do controle de versão.
- Nunca publique credenciais ou URLs sensíveis.
- Atualize as dependências periodicamente.
- Execute os testes antes de realizar novos commits.

---

## Documentação das Dependências

### Mocha

https://mochajs.org/

### Chai

https://www.chaijs.com/

### Supertest

https://github.com/ladjs/supertest

### Mochawesome

https://github.com/adamgruber/mochawesome

### Node.js

https://nodejs.org/

---

## Autor

Bárbara Dandara Moraes

GitHub:
https://github.com/dandarabah

---

## Licença

Este projeto é destinado a fins de estudo, demonstração e evolução de práticas de automação de testes de API.
