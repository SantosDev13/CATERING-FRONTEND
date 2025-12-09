import { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { Trash2, Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Datos del formulario
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    eventDate: '',
    eventType: 'Boda',
    guestCount: '',
    location: '',
    comments: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Formatear items del carrito para el correo
    const itemsListString = cartItems.length > 0 
      ? cartItems.map(item => `- ${item.name} (${item.category})`).join('\n')
      : "Sin productos de alquiler seleccionados (Solo cotización de servicio).";

    // Payload para Spring Boot
    const payload = {
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientPhone: formData.clientPhone,
      eventDate: formData.eventDate,
      eventType: formData.eventType,
      guestCount: parseInt(formData.guestCount) || 0,
      location: formData.location,
      itemsOfInterest: `Comentarios: ${formData.comments}\n\n--- ITEMS SELECCIONADOS ---\n${itemsListString}`
    };

    try {
      await axios.post('http://localhost:8080/api/quotes', payload);
      setStatus('success');
      clearCart();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  // VISTA DE ÉXITO
  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] text-center px-6">
        <CheckCircle className="w-24 h-24 text-[#D4AF37] mb-6" />
        <h2 className="text-5xl font-['Times_New_Roman',serif] mb-4 tracking-widest">GRACIAS</h2>
        <p className="text-xl font-sans text-gray-600 max-w-lg mb-8">
          Hemos recibido tu solicitud. Te hemos enviado una copia a tu correo electrónico. Nos pondremos en contacto contigo a la brevedad.
        </p>
        <button onClick={() => setStatus('idle')} className="border-b border-black uppercase tracking-widest hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
          Volver al formulario
        </button>
      </div>
    );
  }

  // VISTA PRINCIPAL
  return (
    <div>
      {/* 1. HEADER (IMAGEN DE FONDO) */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div> {/* Capa oscura para el Navbar */}
        </div>
        <div className="relative z-10 text-center text-white mt-16">
          <span className="block text-sm tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Empecemos a planear</span>
          <h1 className="text-5xl md:text-7xl font-['Times_New_Roman',serif] tracking-widest">COTIZAR</h1>
        </div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="bg-white py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* COLUMNA IZQ: FORMULARIO */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-['Times_New_Roman',serif] mb-8 tracking-wide">Detalles del Evento</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre Completo</label>
                  <input required name="clientName" onChange={handleChange} type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Teléfono</label>
                  <input required name="clientPhone" onChange={handleChange} type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input required name="clientEmail" onChange={handleChange} type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Fecha</label>
                  <input required name="eventDate" onChange={handleChange} type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Invitados</label>
                  <input required name="guestCount" onChange={handleChange} type="number" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tipo</label>
                  <select name="eventType" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D4AF37] bg-transparent">
                    <option>Boda</option>
                    <option>Corporativo</option>
                    <option>Cumpleaños</option>
                    <option>Cena Privada</option>
                    <option>Buffet Criollo Básico</option>
                    <option>Buffet Criollo Clásico</option>
                    <option>Buffet Criollo Premium</option>
                    <option>Buffet Marino</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Ubicación / Distrito</label>
                <input required name="location" onChange={handleChange} type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Comentarios Adicionales</label>
                <textarea name="comments" onChange={handleChange} rows="4" className="w-full border border-gray-300 p-4 focus:outline-none focus:border-[#D4AF37] text-sm"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-black text-white px-10 py-4 uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all w-full md:w-auto"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          </div>

          {/* COLUMNA DER: RESUMEN Y CONTACTO */}
          <div className="bg-[#F9F9F9] p-8 h-fit">
            <h3 className="text-xl font-['Times_New_Roman',serif] mb-6 tracking-wide border-b border-gray-200 pb-4">
              Tu Selección ({cartItems.length})
            </h3>
            
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-sm italic mb-8">No has seleccionado ítems de alquiler. Se enviará una cotización general.</p>
            ) : (
              <div className="space-y-4 mb-8 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
                    <div className="flex-1">
                      <h4 className="font-serif text-sm text-black">{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-600 mt-1 flex items-center gap-1">
                        <Trash2 size={12} /> Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-6 mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4 text-gray-600">
                <Phone size={18} className="text-[#D4AF37]" />
                <span className="text-sm tracking-widest">987 654 321</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Mail size={18} className="text-[#D4AF37]" />
                <span className="text-sm tracking-widest">contacto@tuempresa.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin size={18} className="text-[#D4AF37]" />
                <span className="text-sm tracking-widest">Miraflores, Lima</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;