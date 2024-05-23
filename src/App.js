import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './pages/Root/Root';
import About from './pages/About/About';
import ProductList from './pages/Product/ProductList';
import Home from './pages/Home/Home';
function App() {
  
  const router=createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [{path:'/about', element: <About/>},
        {path:'/home', element: <Home/>},
        {path:'/products', element: <ProductList/>}
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );

}

export default App;
