import { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Trash2, Image as ImageIcon } from 'lucide-react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  
  // Estado para el formulario nuevo
  const [formData, setFormData] = useState({
    name: '',
    category: 'MOBILIARIO', // Valor por defecto
    description: '',
    imageUrl: ''
  });

  // Cargar productos al iniciar (para ver la lista abajo)
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/products');
    setProducts(response.data);
  };

  // Manejar inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar nuevo producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/products', formData);
      alert('Producto creado con éxito');
      setFormData({ name: '', category: 'MOBILIARIO', description: '', imageUrl: '' }); // Limpiar form
      loadProducts(); // Recargar la lista
    } catch (error) {
      alert('Error al crear producto');
      console.error(error);
    }
  };

  // Borrar producto
  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      loadProducts();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12 px-6">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-3xl font-serif text-brand-dark mb-8">Panel de Administración</h1>

        {/* --- FORMULARIO DE CREACIÓN --- */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 border-t-4 border-brand-gold">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <PlusCircle className="text-brand-gold" /> Nuevo Producto
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre del Producto (Ej. Silla Tiffany)" 
                className="border p-2 rounded w-full" 
                required
              />
              <select 
                name="category" 
                value={formData.category}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-white"
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
              className="border p-2 rounded w-full"
              rows="2"
            />

            <div className="flex gap-2">
              <input 
                name="imageUrl" 
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="URL de la imagen (https://...)" 
                className="border p-2 rounded w-full flex-1"
                required
              />
            </div>
            {/* Previsualización de imagen pequeña si hay URL */}
            {formData.imageUrl && (
              <img src={formData.imageUrl} alt="Preview" className="h-20 w-20 object-cover rounded border" />
            )}

            <button type="submit" className="bg-brand-dark text-white px-6 py-2 rounded hover:bg-brand-gold transition-colors font-bold w-full md:w-auto">
              Guardar Producto
            </button>
          </form>
        </div>

        {/* --- LISTA DE PRODUCTOS EXISTENTES --- */}
        <h2 className="text-2xl font-serif mb-4">Inventario Actual</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Imagen</th>
                <th className="p-4">Nombre</th>
                <th className="p-4">Categoría</th>
                <th className="p-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">
                    <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded" />
                  </td>
                  <td className="p-4 font-bold text-gray-700">{product.name}</td>
                  <td className="p-4 text-sm text-gray-500 badge">{product.category}</td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded hover:bg-red-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Admin;