import { useState } from "react";
import Card from "./Components/Card";

function App() {

  const [username, setUsername] = useState("Vapeders")

  // const changeUsername = () => {
  //   setUsername("Vilped1")
  //   if(username === "Vilped11"){
  //     setUsername("Vapeders")
  //   }
  //   setUsername(prev => prev + 1)
  // }

  const produkter = [
    {
      id: 1,
      title: 'CardTitle', 
      description: 'CardDescription'
    },
    {
      id: 2,
      title: 'CardTitleTWO', 
      description: 'CardDescriptionTWO'
    }
  ]

  return (
    <section>

      {/* <p>{username}</p> */}
      {/* <button onClick={changeUsername}>Bytt bruker</button> */}

      {
        produkter?.map(produkt => <Card key={produkt.id} title={produkt.title} description={produkt.description} setUsername={setUsername} username={username} />)
      }
      {/* <Card title="Sko" description="Jokke sko til ute bruk"/> */}
      {/* <Card>
        <h1>YEY</h1>
      </Card> */}
    </section>
  )
}

export default App
