import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Briefcase, ChefHat, PartyPopper, Check } from 'lucide-react';

const Catering = () => {
  // Configuración de animación para entrada suave
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* 1. HEADER (IMAGEN DE FONDO) */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white mt-16">
          <span className="block text-sm tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Experiencias a medida</span>
          <h1 className="text-5xl md:text-7xl font-['Times_New_Roman',serif] tracking-widest">NUESTROS SERVICIOS</h1>
        </div>
      </div>

      {/* 2. INTRODUCCIÓN */}
      <div className="py-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 font-['Times_New_Roman',serif] italic leading-relaxed">
            "No existen dos eventos iguales. Diseñamos cada propuesta gastronómica pensando en el motivo de la celebración y en la experiencia que deseas regalar a tus invitados."
          </p>
        </div>
      </div>

      {/* --- SECCIÓN 1: BODAS --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[600px] overflow-hidden relative group">
           <img 
             src="https://decoglobal.es/wp-content/uploads/thumbnails/3-ideas-para-una-boda-sencilla-y-elegante.jpg" 
             alt="Boda" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>
        <div className="bg-[#F9F9F9] p-12 lg:p-24 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="text-[#D4AF37]" size={32} />
            <h2 className="text-4xl font-['Times_New_Roman',serif] tracking-wide">BODAS</h2>
          </div>
          <p className="text-gray-600 font-sans mb-8 leading-relaxed">
            Sabemos que es el día más importante de tu vida. Nuestra propuesta para bodas combina elegancia y precisión. Ofrecemos desde el cóctel de bienvenida hasta la cena de trasnoche, asegurando que los novios solo se preocupen por disfrutar.
          </p>
          
          <h3 className="font-bold uppercase tracking-widest text-sm mb-4">La Experiencia Incluye:</h3>
          <ul className="space-y-3 font-sans text-gray-500 text-sm">
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Sesión de degustación previa para los novios.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Cena servida (3 tiempos) o Buffet Premium.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Servicio de mozos estilo etiqueta negra.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Mesa de quesos, dulces y estación de café.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Asesoría en el maridaje de vinos y espumantes.</li>
          </ul>
        </div>
      </section>

      {/* --- SECCIÓN 2: CORPORATIVO --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="text-[#D4AF37]" size={32} />
            <h2 className="text-4xl font-['Times_New_Roman',serif] tracking-wide">CORPORATIVO</h2>
          </div>
          <p className="text-gray-600 font-sans mb-8 leading-relaxed">
            La imagen de tu empresa es nuestra prioridad. Brindamos soluciones gastronómicas eficientes para congresos, lanzamientos de marca, reuniones de directorio y fiestas de fin de año. Puntualidad y presentación impecable garantizadas.
          </p>
          
          <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Soluciones Empresariales:</h3>
          <ul className="space-y-3 font-sans text-gray-500 text-sm">
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Coffee Break (Desayunos y Meriendas).</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Almuerzos Ejecutivos y Box Lunch Gourmet.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Cócteles de Networking con bocaditos finos.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Personal uniformado con la identidad de tu marca (opcional).</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Facturación y gestión logística integral.</li>
          </ul>
        </div>
        <div className="h-[600px] overflow-hidden relative group order-1 lg:order-2">
           <img 
             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" 
             alt="Corporativo" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>
      </section>

      {/* --- SECCIÓN 3: CENA PRIVADA --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[600px] overflow-hidden relative group">
           <img 
             src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
             alt="Cena Privada" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>
        <div className="bg-[#F9F9F9] p-12 lg:p-24 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <ChefHat className="text-[#D4AF37]" size={32} />
            <h2 className="text-4xl font-['Times_New_Roman',serif] tracking-wide">CENA PRIVADA</h2>
          </div>
          <p className="text-gray-600 font-sans mb-8 leading-relaxed">
            Llevamos la experiencia de un restaurante de 5 tenedores a la comodidad de tu hogar. Ideal para pedidas de mano, aniversarios o reuniones exclusivas donde la privacidad y la alta cocina son los protagonistas.
          </p>
          
          <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Detalles del Servicio:</h3>
          <ul className="space-y-3 font-sans text-gray-500 text-sm">
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Chef privado cocinando en vivo.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Menú de degustación de 5 o 7 pasos.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Montaje completo de mesa (vajilla, cristalería y mantelería de lujo).</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Servicio de sommelier y maridaje.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Limpieza total de la cocina al finalizar.</li>
          </ul>
        </div>
      </section>

      {/* --- SECCIÓN 4: CUMPLEAÑOS --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-6">
            <PartyPopper className="text-[#D4AF37]" size={32} />
            <h2 className="text-4xl font-['Times_New_Roman',serif] tracking-wide">CUMPLEAÑOS</h2>
          </div>
          <p className="text-gray-600 font-sans mb-8 leading-relaxed">
            Celebra la vida con estilo. Ya sea un cumpleaños íntimo de 50 años, un Quinceañero espectacular o una fiesta temática, nos encargamos de que la comida y la bebida sean el alma de la fiesta.
          </p>
          
          <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Opciones Festivas:</h3>
          <ul className="space-y-3 font-sans text-gray-500 text-sm">
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Open Bar con coctelería clásica y de autor.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Estaciones de comida en vivo (Pastas, Tacos, Sushi, Carnes).</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Rueda de bocaditos fríos y calientes (Piqueos).</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Mesa de postres temática y Torta personalizada.</li>
            <li className="flex items-start gap-3"><Check size={16} className="text-[#D4AF37] mt-1" /> Servicio de "Aguadito" o "Adobo" para la madrugada.</li>
          </ul>
        </div>
        <div className="h-[600px] overflow-hidden relative group order-1 lg:order-2">
           <img 
             src="https://emilexproducciones.com/wp-content/uploads/2023/03/Pasos-para-organizar-una-fiesta-de-cumpleanos.jpg" 
             alt="Cumpleaños" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="py-24 bg-black text-white text-center">
        <h2 className="text-3xl font-['Times_New_Roman',serif] mb-6">¿Tienes un evento en mente?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Cuéntanos qué estás celebrando y diseñaremos una propuesta exclusiva para ti.
        </p>
        <Link 
          to="/contact" 
          className="inline-block border border-[#D4AF37] text-[#D4AF37] px-12 py-4 uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-all font-bold"
        >
          Solicitar Cotización
        </Link>
      </div>

    </div>
  );
};

export default Catering;