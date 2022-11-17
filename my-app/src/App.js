import './App.css';
import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Products from "./screens/Products";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Detalle from './screens/DetalleProducto';
import Contacto from './screens/Contacto';
import AboutUs from './screens/AboutUs';
import Carrito from './screens/Carrito';


export const productsContext = React.createContext();

function App() {
  const [products, setProducts] = useState([])

  //Trae los productos de la API:
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then(res => {
      setProducts(res.products)
    })
    .catch(err => console.error(err));
  }, []);
  if(!products) return <div>Cargando datos...</div>;
  let aux = products
  aux.map(obj => {
    aux[obj.id-1].quantity = 0
  })

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <productsContext.Provider value={{products, setProducts}}>
          <Routes>
              <Route index path="/" element={<Home />}/>
              <Route path="/Products" element={<Products />} />
              <Route path="/DetalleProducto/:id" element={<Detalle />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/SobreNosotros" element={<AboutUs />} />
              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/ContactosGuardados" element={<AboutUs />} />
          </Routes>
        </productsContext.Provider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
