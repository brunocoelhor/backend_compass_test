# Desafio técnico Compass.UOL
### Pessoa Desenvolvedora Back-end Node.JS PL/SR | Integrações & Microsserviços.

## Passos para execução do projeto

```
$ git clone 
```
### Após clonar o repositório entrar no diretório do projeto e executar os seguintes comandos no terminal

### Comando para subir a imagem do docker com o banco de dados Posgres.
```
$ docker-compose up -d
```

### Comando para baixar as dependências necessárias para o funcionamento do projeto.
```
$ yarn
ou
$ yarn install
ou
$ npm install
```

### Comando para a criação de tabelas e inclusão de dados no Postgres. Neste comando é necessário colocar o nome da migration que está sendo criada, para identificação futura caso necessário.
```
$ yarn prisma migrate dev
ou
$ npm prisma migrate dev
```


### Comando para começar a rodar o programa em ambiente de desenvolvimento.
```
$ yarn dev
```

### Comando para executar os testes desenvolvidos para o projeto.
```
$ yarn test
ou
$ yarn test --coverage
```

### É possível ainda acessar a documentação da aplicação desenvolvida no endereço

```
http://localhost:3333/api-docs/
```


### Comando para build e rodar a aplicação

```
$ yarn build

$ node ./dist/server.js
```

---

## Tecnologias utilizadas

- NodeJS 16.13.2
- ExpressJS 4.17.2
- Typescript 4.5.4
- Prisma 3.8.1
- PostgresSQL
- Jest 27.4.7
- Supertest 6.2.2
- swagger-ui-express 4.3.0
---

O arquivo `insomnia_bruno_compass.json` tem mais a exportação para execução das rotas para testes no programa [Insominia](https://insomnia.rest/download)
---

## Rotas - Mais detalhes das rotas pode ser visto na documentação no [SWAGGER](http://localhost:3333/api-docs/)

[GET] `http://localhost:3333/cities/findByName` - Busca as cidades por nome (query)

[GET] `http://localhost:3333/cities/findByState/` - Busca as cidades por estado (query) 

[POST] `http://localhost:3333/cities` - Cadastro de cidade ( name, state )

---

[POST] `http://localhost:3333/customers` - Cadastro de cliente (name, gender, cityId, birthDate, age )

[PUT] `http://localhost:3333/customers{id}` - Atualiza de um cliente 

[DELETE] `http://localhost:3333/customers/{id}` - Remove de um cliente 

[GET] `http://localhost:3333/customers{id}` - Busca por um Cliente pelo ID

[GET] `http://localhost:3333/customers/findByName` - Busca por um Cliente pelo nome (query)

---

