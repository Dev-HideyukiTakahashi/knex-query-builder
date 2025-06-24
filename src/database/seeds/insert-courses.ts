import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex('courses').insert([
    { name: 'CSS' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Git' },
    { name: 'Github' },
    { name: 'Typescript' },
    { name: 'Express.js' },
    { name: 'Sqlite' },
  ]);
}
