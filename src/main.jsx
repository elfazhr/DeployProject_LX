import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';
import ProductPage from './pages/products.jsx';
import EventReactClass from './ClassEvent.jsx';
import BindingEvent from './BindingEvent.jsx';
import Event from './Event.jsx';
import ProfilePage from './pages/profile.jsx';
import DetailProductPage from './pages/detailProductPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  {
    path: "/classEvent",
    element: <EventReactClass/>
  },
  {
    path: "/bindingEvent",
    element: <BindingEvent/>
  },{
    path: "/event",
    element: <Event/>
    
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },{
    path: "/product/:id",
    element: <DetailProductPage/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
