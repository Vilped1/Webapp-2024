import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { getData } from './lib'
import { writeFile } from 'node:fs/promises'

const app = new Hono()

app.use("/*", cors())

app.get('/', async (c) => {
  const data = await getData()
  return c.json({data})
})

app.post("/", async (c) => {
  const body = await c.req.json()
  // if(!body.place)
  const data = await getData()
  data.push(body)
  await writeFile('./src.data.json', JSON.stringify(data))
  return c.json({data})
})

// async function postJoke(joke) {
//   const {title, answer} = joke
//   console.log(joke)
//   const createdJokeResponse = await fetch('http://localhost:3000', {method: 'POST', headers: {
//     "content-Type": "application.json"
//   },
//     body: JSON.stringify(joke)  
//   })
//   const dadJokes = await createdJokeResponse.json()

// }


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
