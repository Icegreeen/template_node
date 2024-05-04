<h1 align="center">
    Back-end Template 
</h1>

Este é um projeto de template para criar uma API baseado em Node.js, TypeScript, TypeORM e PostgreSQL. Este projeto fornece uma estrutura sólida e pronta para ser estendida para o desenvolvimento de aplicativos web e serviços back-end.
                      
# :pushpin: Table of Contents

* [Running Locally](#construction_worker-running-locally)
* [FAQ](#postbox-faq)

## :construction_worker: Install lib

### Install dependecies production:

``` 
yarn add express pg typeorm dotenv reflect-metadata
```

### Install dev dependencies:

```
yarn add -D typescript nodemon ts-node @types/express @types/node
```

#### Install middleware error:

```
yarn add express-async-errors
```

## :construction_worker: Running Locally

#### Clone repository
```bash
git clone https://github.com/Icegreeen/template_node
```

#### Define environment variables
```bash
cp .env.local.example .env.local

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=postgres

PORT=3000
```
*Make sure that all environment variables match the credentials and that postgres is running on your machine.

#### Install dependencies & execute web application in development mode
```bash
yarn
yarn dev
```

# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** [Typescript](), [PostgresQL](https://www.postgresql.org/) and [TypeORM](https://typeorm.io/)
