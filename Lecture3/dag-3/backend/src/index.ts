import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { getWeatherData, updateWeatherData } from "./lib";
import { Weather } from "./type";

const app = new Hono();

app.use(
  cors({origin: "*",})
);

app.get("/", async (c) => {
  const data = await getWeatherData()
  return c.json({data});
});

/// Hente èn enkelt verdi
app.get("/:place", async (c) => {
  const reqPlace = c.req.param("place")
  const data = await getWeatherData()
  const existing = data.find(
    (entry) => entry?.place?.toLocaleLowerCase() === reqPlace?.toLocaleLowerCase()
  )
  if (!existing) return c.json({error: "Place not found"}, 404)
  return c.json({data: existing, param: reqPlace});
});
///

app.post("/", async (c) => {
  const body = await c.req.json<Weather>()
  if(!body.place) return c.json({error: "Missing place"}, 400)
  const data = await getWeatherData()
  const hasPlace = data.some(
    entry => entry.place.toLowerCase() === body.place.toLowerCase()
  )
  if (hasPlace) return c.json({error: "Place alredy exist"}, 409)

  // !! Uten type
  // const body = await c.req.json()
  // if(!body.place) return c.json({error: "Missing place"}, 400)
  // const data = await getWeatherData()
  // const hasPlace = data.some(
  //   entry => entry.place.toLowerCase() === body.place.toLowerCase()
  // )
  // if (hasPlace) return c.json({error: "Place alredy exist"}, 409)
    
  /// Lagre i serveren fra form
  data.push(body)
  await updateWeatherData(data)
  return c.json({body});
});

const port = 3999;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

// npm create vite@latest . -- --template vanilla