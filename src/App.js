import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';
import Footer from './components/Footer'


function App() {
  return (
    <>
    
    {/*navbar, sidebar, sidecart, footer */}
    <Navbar />
    <Sidebar />
    <Sidecart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
