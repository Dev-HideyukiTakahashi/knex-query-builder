import express, { Request, Response } from 'express';
import { knex } from './knex';

const app = express();
app.use(express.json());

app.post('/courses', async (request: Request, response: Response) => {
  const { name } = request.body;

  await knex('courses').insert({ name });
  // await knex.raw('INSERT INTO courses (name) VALUES(?)', [name]);

  response.status(201).json();
});

app.get('/courses', async (request: Request, response: Response) => {
  const courses = await knex('courses').select().orderBy('name', 'desc');
  // const courses = await knex.raw('SELECT * FROM courses');

  response.json(courses);
});

app.put('/courses/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name } = request.body;

  await knex('courses').update({ name }).where({ id });

  response.json();
});

app.delete('/courses/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  await knex('courses').delete().where({ id });

  response.status(204).json();
});

app.post('/modules/', async (request: Request, response: Response) => {
  const { name, course_id } = request.body;

  await knex('course_modules').insert({ name, course_id });

  response.status(201).json();
});

app.get('/modules/', async (request: Request, response: Response) => {
  const modules = await knex('course_modules').select();

  response.json(modules);
});

app.get('/courses/:id/modules', async (request: Request, response: Response) => {
  const courses = await knex('courses')
    .select(
      'courses.name as course',
      'courses.id as course_id',
      'course_modules.id as module_id',
      'course_modules.name as module',
    )
    .join('course_modules', 'courses.id', 'course_modules.course_id');

  response.json(courses);
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
