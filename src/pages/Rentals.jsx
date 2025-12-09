import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Importamos el contexto

const Rentals = () => {
  // 1. ESTADOS: Aquí definimos las variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <--- ESTA ES LA LÍNEA QUE FALTABA
  
  // 2. HOOKS: Traemos la función del carrito
  const { addToCart } = useCart();

  // 3. EFECTO: Cargar datos desde Java al iniciar
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false); // Aquí cambiamos el estado a falso cuando termina
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* --- HEADER CON IMAGEN (Obligatorio para que se vea el menú) --- */}
    <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo oscura */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Oscurecedor */}
      </div>
      
      {/* Título sobre la imagen */}
      <div className="relative z-10 text-center text-white mt-20">
        <h1 className="text-6xl font-['Times_New_Roman',serif] tracking-widest mb-4">ALQUILERES</h1>
        <p className="text-lg font-sans tracking-wide">Mobiliario exclusivo para tu evento</p>
      </div>
    </div>
    
      {/* Encabezado */}
      <div className="text-center mb-12">
        <br />
        <br />
        <br />
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
          Colección de Alquileres
        </h1>
        <p className="text-gray-600 font-sans max-w-2xl mx-auto">
          Piezas seleccionadas para elevar el nivel de tu evento. Desde mobiliario clásico hasta detalles de mesa únicos.
        </p>
      </div>

      {/* Grid de Productos */}
      {loading ? (
        <p className="text-center text-brand-gold text-xl animate-pulse">Cargando catálogo...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-brand-gold/30"
            >
              {/* Imagen con efecto Zoom */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Info del Producto */}
              <div className="p-6">
                <span className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm font-sans mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Botón de Acción CONECTADO AL CARRITO */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full flex items-center justify-center gap-2 border border-brand-dark py-2 text-sm font-bold uppercase tracking-wide hover:bg-brand-dark hover:text-white transition-all active:scale-95"
                >
                  <ShoppingBag size={16} />
                  Agregar a Cotización
                </button>
              </div>
            </div>
          ))}
          <br />
              <br />
        </div>
      )}
    </div>
  );
};

export default Rentals;