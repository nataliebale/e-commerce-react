import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Header from "./layout/header/Header.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./layout/footer/Footer.jsx";

function App() {
  return (
    <Router>
      <>
        <Header></Header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:id' element={<Product/>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </>
    </Router>
  )
}

export default App;
