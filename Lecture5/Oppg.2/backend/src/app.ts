import { Hono } from "hono";
import { cors } from "hono/cors";
// import { z } from 'zod'
// import { zValidator } from '@hono/zod-validator'
import { isNameValid } from "./lib/validators";

const app = new Hono();

app.use("/*", cors());

let students = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
];

// INFO: Metoder: GET, POST, DELETE & PATCH

// NOTE: Hente uten spesifikk id
// fetch('https://server-url/api/students',{ method: 'GET'})
app.get('/api/students', (c) => {
  return c.json(students)
})

// NOTE: Hente med spesifikk id
// fetch('https://server-url/api/students/${id}',{ method: 'GET'})
app.get('/api/students:id', (c) => {
  const id = c.req.param("id")
  const stud = students.filter((stud) => stud.id === id)
  return c.json(stud)
})

// fetch('https://server-url/api/students',{ method: 'POST', body:JSON.stringify(data)})
app.post('/api/students', async (c) => {
  const data = await c.req.json()
  const {name} = data
  if(!isNameValid(name)) 
    return c.json({succes: false, error: "Invalid name"}, {status: 400})

  students.push({id: crypto.randomUUID(), name})
  return c.json({success: true, data: students}, {status: 201})
})

// const route = app.post('/posts', zValidator('form', z.object({body: z.string()})), async (c) => {
//     const validated = c.req.valid('form')
//     // ... use your validated data
//   }
// )

// fetch('https://server-url/api/students/${id}',{ method: 'DELETE'})
// NOTE: I frontend
/*
const handleDelete = async (id: sting) => {
  const response = await fetch('https://server-url/api/students/${id}',{ method: 'DELETE'})
  const result = await response.json()
  setStudentList(result)
}
*/
app.delete('/api/students:id', (c) => {
  const id = c.req.param("id")
  students = students.filter((stud) => stud.id !== id)
  return c.json(students)
})


// fetch('https://server-url/api/students/${id}',{ method: 'PATCH', body:JSON.stringify(data)})
app.patch('/api/students:id', async (c) => {
  const id = c.req.param("id")
  const {name} = await c.req.json()
  students = students.map((stud) => stud.id === id ? {...stud, name} : stud)
  return c.json(students)
})

app.onError((err, c) => {
  console.error(err);

  return c.json(
    {
      error: {
        message: err.message,
      },
    },
    { status: 500 }
  );
});

export default app;
