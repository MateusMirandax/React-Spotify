import { useState } from "react"
import CardSidebar from "./Componentes/CardSidebar"
import Container from "./Componentes/Container"
import Header from "./Componentes/Header"
import Main from "./Componentes/Main"
import Sidebar from "./Componentes/Sidebar"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

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
        <Outlet>

        </Outlet>
      </Container>
     
   
  </>
  )
}

export default App
