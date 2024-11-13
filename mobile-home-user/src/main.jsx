import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Invoice from './pages/Invoice.jsx'
import ProductDetail from './pages/ProductDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/invoice/:invoiceId",
    element: <Invoice />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
