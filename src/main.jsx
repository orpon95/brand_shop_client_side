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
import Productcard from './components/Productcard/Productcard';
import Details from './components/Details/Details';
import Update from './components/Update/Update';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootelement></Rootelement>,
    children: [

      {

        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/cart")
      },
      {
        path: "/Login",
        element: <LogIn></LogIn>
      },
      {
        path: "/Addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/ProductCard/:brandname",
        element: <Productcard></Productcard>,
        loader: () => fetch("http://localhost:5000/add")
      },
      {
        path: "/Details/:id",
        element: <Details></Details>,
        loader: () => fetch("http://localhost:5000/add")
      },
      {
        path: "/Update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/add/${params.id}`)
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
