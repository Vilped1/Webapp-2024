import Grid from "./comonents/Grid";

const students = [
  {
      id: "V",
      name: "Vilde Pedersen"
  },
  {
      id: "O",
      name: "Ola Norman"
  },
  {
      id: "K",
      name: "Kari Norman"
  }
]

function App() {
  return(
    <main>
      <Grid students={students} />
    </main>
  )
}

export default App;
