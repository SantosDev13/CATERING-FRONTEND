import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Staff from './pages/Staff';
import Admin from './pages/Admin';
import Footer from './components/layout/Footer';
import Gallery from './pages/Gallery';
import Catering from './pages/Catering';
import Buffets from './pages/Buffets';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <CartProvider> {/* <--- ENVOLVER AQUÍ */}
      <Router>
        <div className="font-sans text-brand-dark bg-brand-gray min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/buffets" element={<Buffets />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/" element={<Home />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer /> {/* <--- AGREGAR AQUÍ */}
      </Router>
    </CartProvider> 
  );
}

export default App;