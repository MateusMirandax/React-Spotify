import CardSidebar from "./Componentes/CardSidebar"
import Container from "./Componentes/Container"
import Header from "./Componentes/Header"
import Main from "./Componentes/Main"
import Sidebar from "./Componentes/Sidebar"

function App() {

  return (
    <>
     <Header />
      <Container>
        <Sidebar>
          <CardSidebar/>
          <CardSidebar/>
          <CardSidebar/>
        </Sidebar>
        <Main />
      </Container>
     
   
  </>
  )
}

export default App
