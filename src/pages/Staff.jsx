import { motion } from 'framer-motion';

const Staff = () => {
  return (
    <div>
      {/* 1. HEADER (IMAGEN DE FONDO) */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://concepto.de/wp-content/uploads/2022/12/staff-empresarial-trabajador-equipo.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white mt-16">
          <span className="block text-sm tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Servicio de Excelencia</span>
          <h1 className="text-5xl md:text-7xl font-['Times_New_Roman',serif] tracking-widest">PERSONAL</h1>
        </div>
      </div>

      {/* 2. INTRODUCCIÓN */}
      <div className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-['Times_New_Roman',serif] mb-6">Etiqueta & Protocolo</h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 font-sans leading-relaxed">
          Sabemos que la atención es el alma de cualquier evento. Nuestro equipo está conformado por profesionales con amplia experiencia en hotelería de lujo, entrenados para anticiparse a las necesidades de tus invitados con discreción y elegancia.
        </p>
      </div>

      {/* 3. CATEGORÍAS DE PERSONAL */}
      <div className="bg-[#F9F9F9] py-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Bloque 1: Mozos */}
          <div className="h-[500px] overflow-hidden relative group">
             <img 
               src="https://buffetscriollojuly.com/wp-content/uploads/2024/02/servicio-de-mozos-en-lima.jpg" 
               alt="Mozos" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
          </div>
          <div className="text-left md:pl-10">
            <h3 className="text-2xl font-['Times_New_Roman',serif] tracking-wide mb-4 text-black">MOZOS & AZAFATAS</h3>
            <p className="text-gray-600 mb-6 font-sans">
              Personal uniformado impecablemente (opciones de smoking, mandil francés o clásico). Capacitados en servicio francés, inglés y americano. Se encargan del servicio de alimentos y bebidas, manteniendo siempre las mesas ordenadas.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 uppercase tracking-wider">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Servicio a la mesa</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Bandejeo de bocaditos</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Limpieza constante</li>
            </ul>
          </div>

          {/* Bloque 2: Bartenders (Invertido) */}
          <div className="text-left md:pr-10 order-2 md:order-1">
            <h3 className="text-2xl font-['Times_New_Roman',serif] tracking-wide mb-4 text-black">BARTENDERS & MIXÓLOGOS</h3>
            <p className="text-gray-600 mb-6 font-sans">
              Expertos en coctelería clásica y de autor. No solo preparan bebidas, crean una experiencia en la barra. Disponemos de barras móviles de lujo que se adaptan a la decoración de tu evento.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 uppercase tracking-wider">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Coctelería de Autor</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Flair Bartending (Show)</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Gestión de insumos</li>
            </ul>
          </div>
          <div className="h-[500px] overflow-hidden relative group order-1 md:order-2">
             <img 
               src="https://drinksworld.com/wp-content/uploads/Bartender-at-Night-1024x683.jpg" 
               alt="Bartender" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
          </div>

        </div>
      </div>

      {/* 4. CALL TO ACTION */}
      <div className="py-24 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-['Times_New_Roman',serif] mb-6">¿Necesitas solo el personal?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          También ofrecemos el servicio de alquiler de personal por horas para eventos privados o apoyo a otras empresas.
        </p>
        <a 
          href="/contact" 
          className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-3 uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-all"
        >
          Solicitar Tarifario
        </a>
      </div>

    </div>
  );
};

export default Staff;