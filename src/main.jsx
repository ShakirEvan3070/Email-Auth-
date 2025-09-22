import React from 'react' // <-- Add this line
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import HeroRegister from './Components/HeroRegister';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
         path:'/login',
         element:<Login></Login>
      },
      { path:'/register',
        element:<Register></Register>
      },
      {
        path:'/heroRegister',
        element: <HeroRegister></HeroRegister>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)