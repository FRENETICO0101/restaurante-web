import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import SobreNosotros from '../pages/SobreNosotros'
import Contacto from '../pages/Contacto'
import Reservas from '../pages/Reservas'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/menu', element: <Menu /> },
  { path: '/sobre-nosotros', element: <SobreNosotros /> },
  { path: '/contacto', element: <Contacto /> },
  { path: '/reservas', element: <Reservas /> },
])

export default router
