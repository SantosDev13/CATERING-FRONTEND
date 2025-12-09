import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-brand-gold/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              TU EMPRESA<span className="text-brand-gold">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expertos en catering y logística para eventos en Lima. 
              Transformamos espacios y creamos sabores inolvidables.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-gold uppercase tracking-wider">Explorar</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/rentals" className="hover:text-white transition-colors">Alquiler de Mobiliario</Link></li>
              <li><Link to="/staff" className="hover:text-white transition-colors">Mozos y Bartenders</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Solicitar Cotización</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-gold uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-gold" />
                Av. Larco 123, Miraflores, Lima
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold" />
                +51 987 654 321
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold" />
                eventos@tuempresa.com
              </li>
            </ul>
          </div>

          {/* Columna 4: Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-gold uppercase tracking-wider">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Tu Empresa de Catering. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;