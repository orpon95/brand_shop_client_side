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
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRout from './components/PrivateRout/PrivateRout';
import Error from './components/Error/Error';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootelement></Rootelement>,
    errorElement: <Error></Error>,
    children: [

      {

        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/myCart",
        element: <PrivateRout><MyCart></MyCart></PrivateRout>,
        loader: () => fetch("http://localhost:5000/cart")
      },
      {
        path: "/Login",
        element: <LogIn></LogIn>
      },
      {
        path: "/Addproduct",
        element: <PrivateRout><AddProduct></AddProduct></PrivateRout>
      },
      {
        path: "/ProductCard/:brandname",
        element: <Productcard></Productcard>,
        loader: () => fetch("http://localhost:5000/add")
      },
      {
        path: "/Details/:id",
        element: <PrivateRout><Details></Details></PrivateRout>,
        loader: () => fetch("http://localhost:5000/add")
      },
      {
        path: "/Update/:id",
        element: <PrivateRout><Update></Update></PrivateRout>,
        loader: ({ params }) => fetch(`http://localhost:5000/add/${params.id}`)
      },
      {
        path: "/Register",
        element: <Register></Register>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
