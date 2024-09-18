import Title from "./Title"

type CardProps = {
    title: string
    description: string
    username: string
    setUsername: any
}

export default function Card(props: CardProps, children:any) {
    const {title = "Title", description, username, setUsername} = props

  const changeUsername = () => {
    setUsername("Vilped1")
    if(username === "Vilped1"){
      setUsername("Vapeders")
    }
    // setUsername(prev => prev + 1)
  }

    return(
        <article>
            <Title title={title} username={username} />
            <p>{description}</p>
            <button onClick={changeUsername}>Bytt bruker</button>
            {children}
        </article>
    )
}