
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Page/Login'
import Register from './Page/Register'
import { ToastContainer } from 'react-toastify'

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Route>
    )
  )
  
  return (
    <>
     <ToastContainer />
    <RouterProvider router={shanto}/>
      
    </>
  )
}

export default App
