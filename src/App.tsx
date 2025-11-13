import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  )
}

export default App
