import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Armchair, Users, Star, Calendar, Clock } from 'lucide-react';

const Home = () => {
  // Configuración de animación para reusar
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="overflow-hidden">
      
      {/* 1. HERO SECTION (PORTADA) */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Imagen de Fondo con filtro oscuro */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2069&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div> {/* Capa oscura para leer texto */}
        </div>

        {/* Texto Central */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <span className="uppercase tracking-[0.3em] text-sm md:text-base font-sans mb-4 block text-brand-gold">
            Experiencias Memorables
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            El Arte de Celebrar <br /> Sin Preocupaciones
          </h1>
          <p className="text-lg md:text-xl font-sans text-gray-200 mb-8 max-w-2xl mx-auto">
            Desde la alta cocina hasta el último detalle de la mesa. Nos encargamos de todo para que tú seas un invitado más.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-brand-gold text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-all duration-300"
            >
              Cotizar Ahora
            </Link>
            <Link 
              to="/rentals" 
              className="px-8 py-3 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-all duration-300"
            >
              Ver Catálogo
            </Link>
          </div>
        </motion.div>
      </div>

      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* 1. IMAGEN CON MARCO ELEGANTE */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Marco Dorado Decorativo (detrás) */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#D4AF37] z-0 hidden md:block"></div>
              
              {/* Imagen Principal */}
              <div className="relative z-10 h-[500px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Nuestro Chef" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Cuadro de Cita (Flotante) */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl max-w-xs hidden md:block z-20 border-t-4 border-[#D4AF37]">
                <p className="font-['Times_New_Roman',serif] italic text-gray-800 text-lg">
                  "Cocinar es un acto de amor. Servir es un arte."
                </p>
              </div>
            </motion.div>

            {/* 2. TEXTO DE HISTORIA */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-bold mb-2 block">
                Nuestra Esencia
              </span>
              <h2 className="text-4xl md:text-5xl font-['Times_New_Roman',serif] text-black mb-6 leading-tight">
                TRADICIÓN Y VANGUARDIA
              </h2>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
                Fundada con la visión de transformar simples reuniones en memorias eternas, 
                <span className="font-bold text-black"> Sabor y Eventos </span> 
                ha sido referente de hospitalidad en Huaral durante más de una década.
              </p>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8">
                No somos solo un proveedor de catering; somos arquitectos de momentos. 
                Desde la selección meticulosa de ingredientes locales hasta el diseño 
                de mesas que parecen obras de arte, nuestro compromiso es la excelencia absoluta.
              </p>

              {/* ESTADÍSTICAS (Social Proof) */}
              <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                <div>
                  <span className="block text-4xl font-['Times_New_Roman',serif] text-[#D4AF37]">12+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Años de Exp.</span>
                </div>
                <div>
                  <span className="block text-4xl font-['Times_New_Roman',serif] text-[#D4AF37]">800+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Eventos</span>
                </div>
                <div>
                  <span className="block text-4xl font-['Times_New_Roman',serif] text-[#D4AF37]">100%</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Compromiso</span>
                </div>
              </div>

              {/* Firma (Opcional, da toque personal) */}
              <div className="mt-8">
                <p className="font-['Times_New_Roman',serif] text-2xl italic text-gray-400">
                  Carhuachin & Familia
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN (ELEGANCIA) */}
      <section className="py-20 px-6 bg-white text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">
            Pasión por los detalles
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed text-lg font-sans">
            En <span className="font-bold text-brand-dark">Sabor y Eventos</span>, entendemos que cada evento cuenta una historia única. 
            No solo servimos comida o alquilamos mobiliario; creamos la atmósfera perfecta donde suceden los mejores recuerdos de tu vida.
            Con más de 10 años de experiencia en Huaral, somos sinónimo de puntualidad y sofisticación.
          </p>
        </motion.div>
      </section>

      {/* 3. SERVICIOS (LOS 3 PILARES) */}
      <section className="py-20 px-6 bg-brand-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Catering */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop" 
                alt="Catering" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <ChefHat className="text-brand-gold w-10 h-10 mb-4" />
                <h3 className="text-2xl font-serif text-white mb-2">Catering Exclusivo</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Buffets criollos, cenas servidas y estaciones de comida que deleitan el paladar.
                </p>
                <span className="text-white border-b border-brand-gold w-max text-sm uppercase tracking-widest">Ver Menús</span>
              </div>
            </motion.div>
            

            {/* Card 2: Alquileres */}
            <Link to="/rentals">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="group relative h-[400px] overflow-hidden cursor-pointer"
              >
                <img 
                  src="https://i.pinimg.com/originals/5c/d0/fa/5cd0faf0bf69dc5e03359b5ece96097a.jpg" 
                  alt="Alquileres" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <Armchair className="text-brand-gold w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-serif text-white mb-2">Mobiliario & Menaje</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Sillas Tiffany, mesas de lujo, vajilla importada y todo lo necesario para montar tu evento.
                  </p>
                  <span className="text-white border-b border-brand-gold w-max text-sm uppercase tracking-widest">Ver Catálogo</span>
                </div>
              </motion.div>
            </Link>

            {/* Card 3: Personal */}
            <Link to="/staff">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="group relative h-[400px] overflow-hidden cursor-pointer"
              >
                <img 
                  src="https://thoughtcatalog.com/wp-content/uploads/2014/02/shutterstock_163374878.jpg" 
                  alt="Mozos" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <Users className="text-brand-gold w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-serif text-white mb-2">Mozos & Bartenders</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Personal capacitado en etiqueta y protocolo para una atención impecable.
                  </p>
                  <span className="text-white border-b border-brand-gold w-max text-sm uppercase tracking-widest">Conocer Staff</span>
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. POR QUÉ ELEGIRNOS (ICONOS) */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">La Excelencia es nuestra norma</h2>
            <p className="text-gray-400">Cuidamos lo que no se ve, para que lo que se ve sea perfecto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
              <p className="text-gray-400 text-sm px-8">Insumos seleccionados y mobiliario en perfecto estado de conservación.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Asesoría Integral</h3>
              <p className="text-gray-400 text-sm px-8">Te acompañamos desde la planificación hasta el final de la fiesta.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Puntualidad Absoluta</h3>
              <p className="text-gray-400 text-sm px-8">Tu evento inicia a la hora pactada. La logística es nuestra obsesión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FINAL */}
      <section className="py-24 px-6 bg-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
            ¿Listo para impresionar a tus invitados?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Solicita una cotización hoy mismo y asegura tu fecha.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors shadow-lg"
          >
            Empezar Cotización
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;