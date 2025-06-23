import type { Knex } from 'knex';

// Exemplo criando tabela curso

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('course', table => {
    // criando as colunas da tabela
    table.increments('id').primary(),
      table.text('name').notNullable(),
      table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('courses');
}
