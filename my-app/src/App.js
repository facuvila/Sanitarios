import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Detalle from './screens/DetalleProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home />}/>
            <Route path="DetalleProducto" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
