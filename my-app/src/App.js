import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Products from "./components/Products";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index path="/" element={<Home />}/>
            <Route path="/Products" element={<Products />}/>
        </Routes>
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
