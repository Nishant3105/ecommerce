import React, { useContext } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Headers from './components/layouts/Headers';
import Footer from "./components/layouts/Footer"
// import Root from './pages/Root/Root';
import About from './pages/About/About';
import ProductList from './pages/Product/ProductList';
import ProductDetails from './pages/Product/ProductDetails';
import Home from './pages/Home/Home';
// import CartContextProvider from './context/CartContextProvider';
import ContactUs from './pages/ContactUs/ContactUs';
import AuthContext from './store/AuthContext';
import Auth from './pages/Auth/Auth';

function App() {

  const authCtx=useContext(AuthContext)

  return (
    <>
      <Headers/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/productlist" exact>
          {authCtx.isLoggedIn && <ProductList />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/productlist/:product_id">
          {authCtx.isLoggedIn && <ProductDetails />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contactus">
          <ContactUs/>
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </>
  );

}

export default App;


