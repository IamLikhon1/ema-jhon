import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoaders from './Loaders/cartProductsLoaders';
import CheckOut from './component/Checkout/CheckOut';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './component/provider/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'order',
        element: <Orders></Orders>,
        loader:cartProductsLoaders,
      },
      {
        path:'inventory',
        element:<PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
      {
        path:'checkout',
        element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element: <SignUp></SignUp>
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
