<<<<<<<<<<<<<<PowerShell>>>>>>>>>>>>>>>>>
//-- Consulta o diretório seguinte.
&&& - dir
//-- Utilizado para setar o caminho que será utilizado.
&&& - cd || ls 
//Limpa o console
&&& - cls

<<<<<<<<<<<<<<MongoDB>>>>>>>>>>>>>>>>>

//-- Setar a pasta do Mongo
&&& - cd C:\Program Files\MongoDB\Server\3.2\bin 

//-- Inicia o banco de dados para rodar o armazenamento
&&& - mongod.exe

//--Inicia o banco para utilização
&&& - mongo.exe

//-- Mostra a base que está sendo utilizada
&&& -db

//-- Mostra as bases existentes
&&& - show dbs

//-- Mostra todas as collections
&&& - show collections

//-- Acessa o banco de dados(Caso não exista ele cria) 
&&& - use.'seu db'

//Deleta a collection toda
&&& - ﻿﻿﻿db.'sua collection'.drop()

//Deleta a base toda
&&& - db.dropDatabase()

//-- Localiza tudo que contém na Colection
&&& - db.'sua collection'.find()

// -- Deleta da colletion algo específico
&&& - db.'sua collection'.remove({query:'Exemplo'})

// -- Inserindo na collection conforme query
&&& - db.'sua collection'.insert({query:'Exemplo'})

//Criando uma collection
&&& - db.createCollection('exemplo')


<<<<<<<<<<<<<<NodeJs>>>>>>>>>>>>>>>>>
//Inicia o NodeJS
&&& - node 

//Verifica a versão do node
&&& - node -v

//Instalação do módulo NPM
&&& - npm install

//Instalação do módulo NPM global (-g)
&&& - npm install -g

//Instalação do módulo Express()
&&& - npm install express

//Instalação do módulo Colors()
&&& - npm install colors

//Instalação do módulo Jslint()
&&& - npm install jslint

//Instalação do módulo Nodemon()
&&& - npm install nodemon