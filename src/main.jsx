import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Main from './Componentes/Main.jsx'
import Artista from './Componentes/Artista.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Main/>},
      {path: '/artistas/:id', element: <Artista/>},
      {path: '*', element: <h1>PAgeNotFound</h1>}
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
