import { useState } from "react"
import CardSidebar from "./Componentes/CardSidebar"
import Container from "./Componentes/Container"
import Header from "./Componentes/Header"
import Main from "./Componentes/Main"
import Sidebar from "./Componentes/Sidebar"
import { useEffect } from "react"

function App() {

  const [artistas, setArtistas] = useState([])
  useEffect(() => {

    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(res => setArtistas(res))
    .catch (err => console.log(err))
    .finally(() => console.log("Acabou!"))
  }, [])

  return (
    <>
     <Header />
      <Container>
        <Sidebar>
          <CardSidebar/>
          <CardSidebar/>
          <CardSidebar/>
        </Sidebar>
        <Main>
          {
            artistas
            .filter(artista => artista.genero === "mandelao")
            .map(artista => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
    
              <p>{artista.name}</p>
            </div>
            ))
          }
        
        </Main>
      </Container>
     
   
  </>
  )
}

export default App
