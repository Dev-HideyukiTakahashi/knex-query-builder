script knexe, package.json:

`"knex": "node --import tsx ./node_modules/knex/bin/cli.js",`

Exemplo utilizando no terminal

- Criando migration:

  - `node --import tsx ./node_modules/knex/bin/cli.js migrate:make create-course`

- Executando a última migration:

  - `npm run knex -- migrate:latest`

- Listando migrations:

  - `npm run knex -- migrate:list`

- Desfazendo migrations:
  - `npm run knex -- migrate:down 20250623111426_add-updated-courses.ts`
