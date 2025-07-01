// import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Contact from './pages/Contact'
import AppLayout from "./components/Layouts/AppLayout"
import ErrorPage from "./pages/ErrorPage"
import { About } from "./pages/About"

const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
 {
    index:true,
    path:"/",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"country",
    element:<Country/>
  }
  ,
  {
    path:"contact",
    element:<Contact/>
  }
    ]

  },
 
])
const App = () => {
  return (
     <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App