import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import Add from './components/Add.jsx'
import Layout from './components/Layout.jsx'
import Taskdetail from './components/Taskdetail.jsx'
import Delete from './components/Delete.jsx'
import Login from './components/Login/Login.jsx'
import Update from './components/Update.jsx'
import PrivateRouter from './components/Privaterouter/Privaterouter.jsx'
import { store } from './components/redux/store.js'
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [{
      path: '/',
      element: <PrivateRouter>
      <App />
      </PrivateRouter>
    },
    {
  path: 'add',
  element: <Add></Add>
},{
  path: '/Update/:id',
  element: <Update></Update>
} 
,{
path: '/:taskId',
element: <Taskdetail></Taskdetail>,
}, 
{
path: '/Login',
element: <Login></Login>
  }]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
   
  </React.StrictMode>
);