## Resumeweb


![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
![Waffle.io - Columns and their card count](https://badge.waffle.io/mthais/resumeweb.svg?columns=all)

## What is Resumeweb?

Resumeweb is an application that allows create a web curriculum with a different and attractive look for companies.
The professional will enter your information in the application and you can get HR consulting from people who specialize in this area, this coach will help the professional find the best way to stand out in the job market. The system will allow the user to choose a creative layout for their resume.


## Requirements

* Node.js (currently at v8.6.0)
* React with webpack


## Running tests

To run the test: 
`npm run migrate-test` (first time)

`npm run test` (to run the tests)

## Env to do some actions

For fully integration with api services used by the platform, you will need the api keys. *You should make a copy of your `.env.example` to `.env`* with the right credentials. Please let me know if you need any of those to solve a issue (mail contato@resumeweb.io)


## Run migration

To run the migrations

`npm run migrate`

To create a new migration

`sequelize migration:create --name modelname`

## Run project
### Frontend server
`npm run dev`

### Backend (node.js)
`npm run start:dev`

Then you can access at http://localhost:8082

## Docker

### Requirements

- `Docker Engine`
- `Docker Compose`

### Ubuntu

#### Installing 
- Docker Engine: https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Docker Compose: https://docs.docker.com/compose/install/

#### Running
##### Development environment 
- Run `docker-compose up`
- Open your browser at http://localhost:8082
##### Test environment
- Run `docker-compose -f docker-compose.test.yml up`

