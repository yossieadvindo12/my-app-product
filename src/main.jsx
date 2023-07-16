import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import ProductList from './pages/ProductList.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import ProductElectronics from './pages/ProductElectronics.jsx';
import ProductJewelery from './pages/ProductJewelery.jsx';
import ProductMens from './pages/ProductMens.jsx';
import ProductWomens from './pages/ProductWomens.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductList/>,
      },
      {
        path: "products/electronics",
        element: <ProductElectronics />,
      },
      {
        path: "products/jewelery",
        element: <ProductJewelery/>,
      },
      {
        path: "products/mens",
        element: <ProductMens/>,
      },
      {
        path: "products/womens",
        element: <ProductWomens/>,
      },
      {
        index: true,
        path: "detail/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
