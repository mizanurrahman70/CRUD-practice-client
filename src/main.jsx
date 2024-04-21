import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Users from './components/Users.jsx';
import UserUpdate from './components/UserUpdate.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/users',
    loader:()=>fetch('http://localhost:5000/users'),
    element:<Users></Users>
  },
  {
    path:"/users/:id",
    element:<UserUpdate></UserUpdate>,
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
