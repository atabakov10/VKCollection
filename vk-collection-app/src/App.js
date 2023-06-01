import { useEffect, useState } from "react";
import * as productsService from '../src/services/productsService'
import ProductList from "./components/Product/ProductList";
import { NavbarVk } from "./components/Navigation/Navbar";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";
import { About } from './components/AboutUs/About';
import { DetailsPage } from './Details/DetailsPage';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsService.getAllProducts()
      .then(setProducts)
      .catch(err => { console.error(err) });
  }, []);

  return (
    <div>
      <NavbarVk />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/about" element={<About />}/>
        <Route path="/products/:productId" element={<DetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
