import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
<<<<<<< HEAD
import Products from "./components/Products";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
=======
import Detalle from './screens/DetalleProducto';
>>>>>>> de96b64023a4c3e1465ab5dea7b1fc49ae7e704a

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index path="/" element={<Home />}/>
<<<<<<< HEAD
            <Route path="/Products" element={<Products />}/>
=======
            <Route path="DetalleProducto" element={<Detalle />} />
>>>>>>> de96b64023a4c3e1465ab5dea7b1fc49ae7e704a
        </Routes>
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
