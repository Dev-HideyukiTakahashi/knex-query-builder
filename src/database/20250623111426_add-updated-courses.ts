import type { Knex } from 'knex';

// exemplo adicionando campo na tabela

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('course', table => {
    table.timestamp('updated_at').defaultTo(knex.fn.now()).after('created_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('course', table => {
    table.dropColumn('updated_at');
  });
}
