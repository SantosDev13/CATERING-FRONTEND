import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importante para redirigir
import { PlusCircle, Trash2, Image as ImageIcon, LogOut } from 'lucide-react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  // 1. Recuperar el token de seguridad
  const token = localStorage.getItem('auth_token');

  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: '',
    category: 'MOBILIARIO',
    description: '',
    imageUrl: '',
    price: '' // Agregamos precio por si lo usas en el futuro
  });

  // 2. Verificar seguridad al cargar la página
  useEffect(() => {
    if (!token) {
      navigate('/login'); // Si no hay llave, te manda a la puerta (Login)
      return;
    }
    loadProducts();
  }, [navigate, token]);

  const loadProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products', {
        headers: { 'Authorization': `Basic ${token}` } // <--- ENVIAMOS LA LLAVE
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      // Si el servidor dice "No autorizado" (401), es que la contraseña cambió o expiró
      if (error.response && error.response.status === 401) {
        alert("Tu sesión ha expirado. Por favor ingresa nuevamente.");
        localStorage.removeItem('auth_token');
        navigate('/login');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/products', formData, {
        headers: { 'Authorization': `Basic ${token}` } // <--- LLAVE EN EL POST
      });
      alert('Producto creado con éxito');
      // Limpiar formulario
      setFormData({ name: '', category: 'MOBILIARIO', description: '', imageUrl: '', price: '' });
      loadProducts(); // Recargar la lista
    } catch (error) {
      console.error(error);
      alert('Error al crear producto. Verifica que tengas sesión activa.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
      try {
        await axios.delete(`http://localhost:8080/api/products/${id}`, {
            headers: { 'Authorization': `Basic ${token}` } // <--- LLAVE EN EL DELETE
        });
        loadProducts();
      } catch (error) {
        console.error(error);
        alert("Error al eliminar");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Encabezado con Botón Salir */}
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif text-brand-dark">Panel de Administración</h1>
            <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 hover:text-red-800 font-bold border border-red-200 bg-white px-4 py-2 rounded shadow-sm hover:shadow-md transition-all"
            >
                <LogOut size={18} /> Cerrar Sesión
            </button>
        </div>

        {/* --- FORMULARIO DE CREACIÓN --- */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 border-t-4 border-[#D4AF37]">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <PlusCircle className="text-[#D4AF37]" /> Nuevo Producto
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre del Producto (Ej. Silla Tiffany)" 
                className="border p-2 rounded w-full focus:border-[#D4AF37] outline-none" 
                required
              />
              <select 
                name="category" 
                value={formData.category}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-white focus:border-[#D4AF37] outline-none"
              >
                <option value="MOBILIARIO">MOBILIARIO</option>
                <option value="MENAJE">MENAJE</option>
                <option value="COCINA">COCINA</option>
                <option value="DECORACION">DECORACION</option>
              </select>
            </div>

            <textarea 
              name="description" 
              value={formData.description}
              onChange={handleChange}
              placeholder="Descripción breve..." 
              className="border p-2 rounded w-full focus:border-[#D4AF37] outline-none"
              rows="2"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-2">
                    <input 
                        name="imageUrl" 
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="URL de la imagen (https://...)" 
                        className="border p-2 rounded w-full flex-1 focus:border-[#D4AF37] outline-none"
                        required
                    />
                </div>
                <input 
                    name="price" 
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Precio (Opcional)" 
                    className="border p-2 rounded w-full focus:border-[#D4AF37] outline-none"
                />
            </div>
            
            {/* Previsualización */}
            {formData.imageUrl && (
              <div className="mt-2">
                  <p className="text-xs text-gray-400 mb-1">Vista previa:</p>
                  <img src={formData.imageUrl} alt="Preview" className="h-24 w-24 object-cover rounded border" />
              </div>
            )}

            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-[#D4AF37] transition-colors font-bold w-full md:w-auto tracking-widest uppercase">
              Guardar Producto
            </button>
          </form>
        </div>

        {/* --- LISTA DE PRODUCTOS EXISTENTES --- */}
        <h2 className="text-2xl font-serif mb-4">Inventario Actual</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4">Imagen</th>
                <th className="p-4">Nombre</th>
                <th className="p-4">Categoría</th>
                <th className="p-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded border border-gray-200" />
                  </td>
                  <td className="p-4 font-bold text-gray-800">{product.name}</td>
                  <td className="p-4">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold border border-gray-300">
                        {product.category ? product.category.name : 'Sin Categoría'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded-full hover:bg-red-100 transition-colors"
                      title="Eliminar producto"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                  <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-400 italic">
                          No hay productos registrados aún.
                      </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Admin;