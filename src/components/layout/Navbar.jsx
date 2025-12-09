import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  // Función simplificada: SOLO LETRAS
  const getLinkClass = (path) => {
    // Estilo base: Times New Roman, Mayúsculas, Espaciado amplio
    const baseClasses = "text-lg tracking-[0.2em] font-['Times_New_Roman',serif] transition-colors duration-300";
    
    // Si está activo: Color Dorado
    if (location.pathname === path) {
      return `${baseClasses} text-[#D4AF37] border-b border-[#D4AF37]`; // Opional: una línea sutil abajo
    }
    
    // Si está inactivo: Blanco (hover dorado)
    return `${baseClasses} text-white hover:text-[#D4AF37]`;
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-8">
      <div className="container mx-auto px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-3xl font-['Times_New_Roman',serif] font-bold text-white tracking-widest uppercase z-50">
          Sabor & Eventos
        </Link>

        {/* MENU ESCRITORIO (Solo letras) */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className={getLinkClass('/')}>
            Inicio
          </Link>
          <Link to="/catering" className={getLinkClass('/catering')}>
            Catering
          </Link>
          <Link to="/buffets" className={getLinkClass('/buffets')}>
          Buffets
          </Link>
          <Link to="/rentals" className={getLinkClass('/rentals')}>
            Alquileres
          </Link>
          <Link to="/staff" className={getLinkClass('/staff')}>
            Personal
          </Link>
          <Link to="/gallery" className={getLinkClass('/gallery')}>
            Galería
          </Link>
          
          {/* Botón Cotizar: Minimalista (Borde fino blanco) */}
          <Link 
            to="/contact" 
            className={`relative px-8 py-2 border transition-all duration-300 font-['Times_New_Roman',serif] text-sm tracking-[0.2em] uppercase
              ${location.pathname === '/contact' 
                ? 'border-[#D4AF37] text-[#D4AF37]' 
                : 'border-white text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
          >
            Cotizar
            {/* Contador rojo pequeño */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white font-sans text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-white">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* MENU MOVIL */}
        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MENU DESPLEGABLE MOVIL (Pantalla completa negro elegante) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8 z-40">
           <Link to="/" className="text-white text-2xl font-['Times_New_Roman',serif] tracking-widest" onClick={() => setIsOpen(false)}>INICIO</Link>
           <Link to="/rentals" className="text-white text-2xl font-['Times_New_Roman',serif] tracking-widest" onClick={() => setIsOpen(false)}>ALQUILERES</Link>
           <Link to="/staff" className="text-white text-2xl font-['Times_New_Roman',serif] tracking-widest" onClick={() => setIsOpen(false)}>PERSONAL</Link>
           <Link to="/contact" className="text-[#D4AF37] text-2xl font-['Times_New_Roman',serif] tracking-widest border-b border-[#D4AF37]" onClick={() => setIsOpen(false)}>COTIZAR</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;