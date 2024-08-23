import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import './index.css'

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import Contact from './routes/Contact'

//  2 - pagina de erro
import ErrorPage from './routes/ErrorPage'

// 3 - componente base
import Home from './routes/Home'

// 7 - rota dinamica
import Product from './routes/Product'

// 8 - nested route
import Info from './routes/Info'

// 9 - search params
import Search from './routes/Search'

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  //  3 - component base
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
    path: "contact",
    element: <Contact />,
    },

    // 7 - rota dinamica
    {
      path: "products/:id",
      element: <Product />,
    },

    // 8 - nested route
    {
      path: "products/:id/info",
      element: <Info />,
    },

    // 9 - search params
    {
      path: "search",
      element: <Search />,
    },    

    // 10 - redirect
    {
      path: "teste",
      element: <Navigate to=""/>,
    },   
  ],
},
// {
//   path: "Contact",
//   element: <Contact />,
// },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
