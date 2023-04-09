import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
       path:'/',
       element: <Home></Home>,
       loader: ()=> fetch('features.json')
      },
      {
       path:'statistics',
       element: <Statistics></Statistics>
      },
      {
       path:'applied',
       element: <Applied></Applied>
      },
      {
       path:'blog',
       element: <Blog></Blog>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
