import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './components/Home/Home';




import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyCart from './components/myCart/myCart';
import LogIn from './components/logIn/logIn';
import AddProduct from './components/addProduct/addProduct';
import Rootelement from './components/Rootelement/Rootelement';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootelement></Rootelement> ,
    children:[

      {

        path:"/",
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')
      },
      {
        path:"/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/Login",
        element: <LogIn></LogIn>
      },
      {
        path: "/Addproduct",
        element: <AddProduct></AddProduct>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
