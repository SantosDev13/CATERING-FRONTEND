import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, ZoomIn } from 'lucide-react';

// IMAGENES DE EJEMPLO (Reemplázalas luego con las tuyas)
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519225448526-0a0295155809?q=80&w=800&auto=format&fit=crop", category: "BODAS" },
  { id: 2, src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop", category: "CATERING" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc6?q=80&w=800&auto=format&fit=crop", category: "CORPORATIVO" },
  { id: 4, src: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=800&auto=format&fit=crop", category: "AMBIENTACIÓN" },
  { id: 5, src: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=800&auto=format&fit=crop", category: "DETALLES" },
  { id: 6, src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop", category: "CENA" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* 1. HEADER (IMAGEN DE FONDO) */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white mt-16">
          <span className="block text-sm tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Nuestro Portafolio</span>
          <h1 className="text-5xl md:text-7xl font-['Times_New_Roman',serif] tracking-widest">GALERÍA</h1>
        </div>
      </div>

      {/* 2. GRID DE FOTOS */}
      <div className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-['Times_New_Roman',serif] tracking-wide mb-4">MOMENTOS INOLVIDABLES</h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img) => (
              <motion.div 
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-80 overflow-hidden cursor-pointer bg-gray-100"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <ZoomIn size={32} className="text-[#D4AF37] mb-2" />
                  <span className="tracking-[0.2em] text-sm uppercase">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SECCIÓN DE VIDEOS */}
      <div className="py-24 px-6 bg-[#F9F9F9]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-['Times_New_Roman',serif] tracking-wide mb-4">EVENTOS EN VIDEO</h2>
            <p className="text-gray-500 font-sans">Vive la experiencia desde adentro</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VIDEO 1 */}
            <div className="aspect-video bg-black/10 relative flex items-center justify-center group cursor-pointer overflow-hidden border border-gray-200">
              {/* Aquí pondrás tu etiqueta <video> o <iframe> en el futuro */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all relative z-10" />
              <span className="absolute bottom-4 left-4 text-white text-xs tracking-widest z-10 font-bold uppercase">Boda Civil - Miraflores</span>
            </div>

            {/* VIDEO 2 */}
            <div className="aspect-video bg-black/10 relative flex items-center justify-center group cursor-pointer overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all relative z-10" />
              <span className="absolute bottom-4 left-4 text-white text-xs tracking-widest z-10 font-bold uppercase">Evento Corporativo</span>
            </div>

            {/* VIDEO 3 */}
            <div className="aspect-video bg-black/10 relative flex items-center justify-center group cursor-pointer overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all relative z-10" />
              <span className="absolute bottom-4 left-4 text-white text-xs tracking-widest z-10 font-bold uppercase">Cena Privada</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL (LIGHTBOX) PARA VER FOTOS EN GRANDE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Ampliada" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()} // Para que no se cierre si das clic a la foto
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;