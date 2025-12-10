import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Utensils, Anchor } from 'lucide-react';

const Buffets = () => {
  
  // DATOS DE LOS BUFFETS
  const buffetOptions = [
    {
      id: 1,
      title: "Buffet Criollo Básico",
      price: "40",
      description: "La opción ideal para compartir un almuerzo con el auténtico sabor casero.",
      minPax: "Mínimo 25 personas",
      image: "https://i.pinimg.com/originals/ad/dc/fa/addcfaec3a58a67c788dddcd5003c098.jpg", // Foto de Ají de Gallina o similar
      includes: [
        "1 Entrada (Papa a la Huancaína o Ocopa)",
        "2 Platos de Fondo a elección",
        "Arroz Blanco y Yuquitas fritas",
        "Refresco de fruta de estación",
        "Menaje básico incluido"
      ]
    },
    {
      id: 2,
      title: "Buffet Criollo Clásico",
      price: "53",
      description: "Nuestra opción más solicitada. Variedad y sabor para eventos sociales y corporativos.",
      minPax: "Mínimo 25 personas",
      featured: true, // Para resaltarlo
      image: "https://perusabroso.net/wp-content/uploads/secretos-anticucho-peruano-brocheta.webp", // Foto de Lomo Saltado / Seco
      includes: [
        "2 Entradas a elección",
        "3 Platos de Fondo (Ají de Gallina, Seco, Carapulcra)",
        "Arroz Blanco y Arroz a la Jardinera",
        "Postre (Mazamorra o Arroz con Leche)",
        "Chicha Morada o Maracuyá",
        "Menaje hotelero completo"
      ]
    },
    {
      id: 3,
      title: "Buffet Criollo Premium",
      price: "79",
      description: "Una experiencia gastronómica superior con los mejores cortes y presentación de lujo.",
      minPax: "Mínimo 25 personas",
      image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1000&auto=format&fit=crop", // Foto elegante
      includes: [
        "Ronda de Piqueos Criollos de bienvenida",
        "4 Platos de Fondo (Incluye Lomo Fino)",
        "Guarniciones ilimitadas",
        "Mesa de Postres Limeños",
        "Bebidas ilimitadas + Brindis",
        "Servicio de Mozos incluido"
      ]
    },
    {
      id: 4,
      title: "Buffet Marino",
      price: "65",
      description: "Frescura del mar a tu mesa. Perfecto para almuerzos de verano o corporativos.",
      minPax: "Mínimo 25 personas",
      isMarine: true,
      image: "https://images.unsplash.com/photo-1535400255456-984241443b29?q=80&w=1000&auto=format&fit=crop", // Ceviche
      includes: [
        "Ceviche de Pescado fresco",
        "Jalea Mixta con tártara",
        "Arroz con Mariscos",
        "Causa de Langostinos o Pulpa de Cangrejo",
        "Chicha Morada Frozen",
        "Chilcano de cortesía"
      ]
    }
  ];

  return (
    <div>
      {/* 1. HEADER (IMAGEN DE OLLAS DE BARRO O COMIDA PERUANA) */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://eastcoasttraveller.com/images/Food/Buffets_Plates_GK.png')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white mt-16">
          <span className="block text-sm tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Sazón Peruana</span>
          <h1 className="text-5xl md:text-7xl font-['Times_New_Roman',serif] tracking-widest">BUFFETS</h1>
        </div>
      </div>

      {/* 2. INTRO */}
      <div className="py-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-['Times_New_Roman',serif] tracking-wide mb-6">NUESTRAS PROPUESTAS</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            Disfruta de un delicioso Buffet con todos tus invitados. 
            Llevamos la mejor sazón a tus eventos sociales y corporativos, encargándonos de todo el montaje y servicio.
          </p>
        </div>
      </div>

      {/* 3. GRID DE TARJETAS DE PRECIOS */}
      <div className="pb-24 px-6 bg-[#F9F9F9]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {buffetOptions.map((option) => (
              <motion.div 
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${option.featured ? 'border-2 border-[#D4AF37] relative transform lg:-translate-y-4' : ''}`}
              >
                {/* Etiqueta de Recomendado */}
                {option.featured && (
                  <div className="bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 absolute top-0 right-0 z-10">
                    Más Pedido
                  </div>
                )}

                {/* Imagen Cabecera */}
                <div className="h-48 overflow-hidden relative">
                   <img src={option.image} alt={option.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                   <div className="absolute inset-0 bg-black/20"></div>
                   {option.isMarine && (
                     <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                       <Anchor size={20} />
                     </div>
                   )}
                </div>

                {/* Contenido */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-['Times_New_Roman',serif] font-bold text-gray-900 mb-2 min-h-[56px]">
                    {option.title}
                  </h3>
                  
                  {/* Precio */}
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-sm text-gray-500 mb-1">S/</span>
                    <span className="text-4xl font-['Times_New_Roman',serif] text-[#D4AF37] font-bold">{option.price}</span>
                    <span className="text-xs text-gray-400 mb-1">/ persona</span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-100 pb-4">
                    {option.minPax}
                  </p>

                  <p className="text-sm text-gray-600 mb-6 flex-grow">
                    {option.description}
                  </p>

                  {/* Lista de Inclusiones */}
                  <ul className="space-y-3 mb-8">
                    {option.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                        <Check size={14} className={`mt-1 min-w-[14px] ${option.isMarine ? 'text-blue-500' : 'text-[#D4AF37]'}`} />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 border text-center uppercase tracking-widest text-xs font-bold transition-all
                      ${option.featured 
                        ? 'bg-[#D4AF37] text-white hover:bg-black border-[#D4AF37] hover:border-black' 
                        : 'border-gray-300 text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                      }`}
                  >
                    Cotizar Ahora
                  </Link>
                </div>
              </motion.div>
            ))}

          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm italic">
              * Los precios no incluyen IGV. El servicio de transporte se cotiza según el distrito.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buffets;